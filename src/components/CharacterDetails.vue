<script setup lang="ts">
import { computed } from 'vue';
import IconClose from './icons/IconClose.vue';
import { CharacterCard, CardInfo, IconFavorite } from "rick-and-morty-vue-character-card";
import "rick-and-morty-vue-character-card/dist/style.css";
import { useReactiveFetch } from '@/composables/reactiveFetchData';
import type { ICharacter, IEpisode } from '@/types';

const props = defineProps<{
    character: ICharacter
}>();

const { character } = props;

const {
    name,
    image,
    status,
    species, 
    type, 
    gender,
    origin: {
        name: originName
    },
    isFavorite
} = character;

const emit = defineEmits(['onClose']);

const episodeUrl = computed(() => {
    if (character.episode.length === 0) {
        return [];
    }

    const ids: number[] = [];
    character.episode.forEach((ep) => {
        const index = ep.lastIndexOf('/');
        ids.push(parseInt(ep.substring(index + 1)));
    });

    return `https://rickandmortyapi.com/api/episode/${ids.join(',')}`;
});

const { data, error } = useReactiveFetch<IEpisode | IEpisode[]>(episodeUrl);
</script>
<template>
    <Teleport to="body">
        <div id="character-modal" class="modal">
            <div v-if="error">Error: {{ error.message }}</div>
            <div v-else-if="!data">Loading...</div>
            <div v-else 
                id="modal-content"
                class="modal__content">
                <div
                    class="modal__content-section modal__content-section--header"
                    data-test="content-section"
                    >
                    <IconClose class="modal__content-icon-close" @click="emit('onClose')"/>
                    <img :src="image" class="modal__content-image" />
                    <div id="favorite-icon-wrapper" class="modal__content-favorite">
                        <IconFavorite :is-favorite="isFavorite" />
                    </div>
                    <span class="modal__context-text modal__context-text--capitalize">{{ status }}</span>
                    <span class="modal__context-text modal__context-text--20">{{ name }}</span>
                    <span class="modal__context-text modal__context-text--capitalize">{{ species }}</span>
                </div>
                <div 
                    class="modal__content-section"
                    data-test="content-section"
                    >
                    <span class="modal__context-text modal__context-text--20">Información</span>
                    <div class="modal__content-section modal__content-section--row">
                        <CardInfo
                            class="modal__content-section--row-items"
                            label="Gender"
                            :value="gender"
                            />
                        <CardInfo
                            class="modal__content-section--row-items"
                            label="Origin"
                            :value="originName"
                            />
                        <CardInfo
                            class="modal__content-section--row-items"
                            label="Type"
                            :value="type.length === 0 ? 'Unknown' : type"
                            />
                    </div>
                </div>
                <hr class="modal__content-separator"/>
                <div 
                    class="modal__content-section"
                    data-test="content-section"
                    >
                    <span class="modal__context-text modal__context-text--20">Episodios</span>
                    <div class="modal__content-section modal__content-section--row modal__content-section--row-start">
                        <CardInfo 
                            v-for="({ id, name, episode, air_date }) in (Array.isArray(data) ? data : [data])"
                            class="modal__content-section--row-items"
                            :label="name"
                            :value="episode"
                            :footer="air_date"
                            :show-icon="false"
                            :key="id"
                            >
                        </CardInfo>
                    </div>
                </div>
                <hr class="modal__content-separator"/>
                <div
                    class="modal__content-section"
                    data-test="content-section"
                    >
                    <span class="modal__context-text modal__context-text--20">Personajes interesantes</span>
                    <div class="modal__content-section modal__content-section--row">
                        <CharacterCard
                            :character-data="character"
                            :is-favorite="character.isFavorite"
                            />
                        <CharacterCard
                            :character-data="character"
                            :is-favorite="character.isFavorite"
                            />
                    </div>
                </div>
                <div
                    class="modal__content-section"
                    data-test="content-section"
                    >
                    <div class="modal__content-section modal__content-section--row modal__content-section--row-end">
                        <button class="modal__content-share-button">
                            Compartir Personaje
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<style scoped>
.modal {
    padding: 8px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 1.2em;
    transition: background-color .5s ease;
    position: fixed;
    z-index: 999;
    top: 2%;
    left: 50%;
    width: 800px;
    margin-left: -400px;
    height: 95%;
    overflow-y: scroll;
}

.modal__content {
    flex: 5 1 0%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: rgb(0, 0, 0);
    font-size: 10px;
}

.modal__content-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-between;
}

.modal__content-separator {
    color: rgb(224, 224, 224);
    margin-top: 20px;
}

.modal__content-section--header {
    flex: 1 1 0%;
    justify-content: center;
    padding: 0.5rem;
    align-items: center;
    background-color: rgb(204, 204, 204);
}

.modal__content-section--row {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
}

.modal__content-section--row-start {
    justify-content: flex-start;
}

.modal__content-section--row-end {
    flex-wrap: nowrap;
    justify-content: flex-end;
}

.modal__content-section--row-items {
    flex: 0 1 auto;
    align-self: auto;
}

.modal__content-icon-close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}

.modal__content-image {
    width: 140px;
    height: 140px;
    border-radius: 70px;
    border: 5px solid #fff;
    margin: 20px;
}

.modal__content-favorite {
    width: 30px;
    height: 30px;
    position: absolute;
    background: rgb(242, 242, 242);
    border: 5px solid #fff;
    border-radius: 9999px;
    margin-top: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal__context-text {
    text-transform: capitalize;
}

.modal__context-text--20 {
    font-size: 20px;
    font-weight: 600;
    padding: 5px 0px;
}

.modal__context-text--capitalize {
    text-transform: uppercase;
}

.modal__content-share-button {
    margin: 20px;
    padding: 10px 20px;
    background-color: rgb(17, 85, 95);
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
</style>
