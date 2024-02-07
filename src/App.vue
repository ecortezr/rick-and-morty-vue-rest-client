<script setup lang="ts">
import { ref, computed, watch, toValue } from "vue";
import { CharacterCard } from "rick-and-morty-vue-character-card";
import "rick-and-morty-vue-character-card/dist/style.css";
import CharacterDetails from './components/CharacterDetails.vue'
import { useReactiveFetch } from '@/composables/reactiveFetchData';
import type { Page, ICharacterApi, ICharacter } from './types';
import { getEpisodeName } from './episodeUtils';

const searchFilter = ref('');
const selectedCharacter = ref<ICharacter>();
const charactersData = ref<ICharacter[]>();

const apiUrl = computed(() => {
  let baseUrl = 'https://rickandmortyapi.com/api/character?';
  if (searchFilter.value && searchFilter.value.length >= 3) {
    baseUrl += `name=${searchFilter.value}`;
  }

  return baseUrl;
});

const { data, error } = useReactiveFetch<Page<ICharacterApi>>(apiUrl);

const handleClickCard = (id: number) => {
  selectedCharacter.value = charactersData?.value?.find((character) => character.id === id);
};

watch(
  () => data.value,
  async () => {
    const newData = toValue(data);
    const characters = newData?.results ?? [];

    const promisesArray = characters.map((character) => {
      const { location, episode, ...others } = character;

      const randomRangeNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

      return getEpisodeName(episode[0])
        .then((firstEpisodeName) => {
          return {
            ...others,
            episode,
            locationName: location.name,
            isFavorite: randomRangeNumber(0, 1) === 1,
            firstEpisodeName
          };
        });
    });

    // Parallel execution to minimize render time
    const allData = await Promise.all(promisesArray);
    charactersData.value = allData;
  },
  { 
    immediate: true
  }
);
</script>

<template>
  <header>
    <div class="wrapper">
        Filtro por nombre: <input v-model="searchFilter" placeholder="Escriba al menos 3 letras, para filtrar"/>
        <CharacterDetails
          v-if="selectedCharacter"
          :character="selectedCharacter"
          @on-close="selectedCharacter = undefined"
          />
    </div>
  </header>

  <main>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-else-if="!charactersData">Loading...</div>
    <template v-else>
      <span 
        v-for="character in charactersData"
        class="card__container"
        :key="character.id"
        @click="handleClickCard(character.id)"
        >
        <CharacterCard
          :character-data="character"
          max-width="326px"
          bg-color="#FFF"
          :is-favorite="character.isFavorite"
          />
      </span>
    </template>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
}

header {
  line-height: 1.5;
}

header .wrapper {
  margin: 5px;
}

.card__container {
}

.card__container:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
  cursor: pointer;
}
</style>
./episodeUtils