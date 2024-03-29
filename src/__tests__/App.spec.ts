import { nextTick, type Ref } from 'vue';
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';
import { useReactiveFetch } from '@/composables/reactiveFetchData';
import type { Page, ICharacterApi } from '@/types';

const mock = vi.hoisted(() => {
  const firstEpisodeName = 'Close Rick-counters of the Rick Kind';
  const mockedCharactersFirstPage = {
    info: {
      count: 826,
      pages: 42,
      next: "https://rickandmortyapi.com/api/character?page=2",
      prev: null
    },
    results: [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z"
      },
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z"
      },
      {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        url: "https://rickandmortyapi.com/api/character/3",
        created: "2017-11-04T19:09:56.428Z"
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        url: "https://rickandmortyapi.com/api/character/4",
        created: "2017-11-04T19:22:43.665Z"
      },
      {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        url: "https://rickandmortyapi.com/api/character/5",
        created: "2017-11-04T19:26:56.301Z"
      },
      {
        id: 6,
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        type: "",
        gender: "Female",
        origin: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2"
        },
        location: {
          name: "Abadango",
          url: "https://rickandmortyapi.com/api/location/2"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/27"
        ],
        url: "https://rickandmortyapi.com/api/character/6",
        created: "2017-11-04T19:50:28.250Z"
      },
      {
        id: 7,
        name: "Abradolf Lincler",
        status: "unknown",
        species: "Human",
        type: "Genetic experiment",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
          name: "Testicle Monster Dimension",
          url: "https://rickandmortyapi.com/api/location/21"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11"
        ],
        url: "https://rickandmortyapi.com/api/character/7",
        created: "2017-11-04T19:59:20.523Z"
      },
      {
        id: 8,
        name: "Adjudicator Rick",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/28"
        ],
        url: "https://rickandmortyapi.com/api/character/8",
        created: "2017-11-04T20:03:34.737Z"
      },
      {
        id: 9,
        name: "Agency Director",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/24"
        ],
        url: "https://rickandmortyapi.com/api/character/9",
        created: "2017-11-04T20:06:54.976Z"
      },
      {
        id: 10,
        name: "Alan Rails",
        status: "Dead",
        species: "Human",
        type: "Superhuman (Ghost trains summoner)",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Worldender's lair",
          url: "https://rickandmortyapi.com/api/location/4"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/25"
        ],
        url: "https://rickandmortyapi.com/api/character/10",
        created: "2017-11-04T20:19:09.017Z"
      },
      {
        id: 11,
        name: "Albert Einstein",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/12"
        ],
        url: "https://rickandmortyapi.com/api/character/11",
        created: "2017-11-04T20:20:20.965Z"
      },
      {
        id: 12,
        name: "Alexander",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
          name: "Anatomy Park",
          url: "https://rickandmortyapi.com/api/location/5"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/3"
        ],
        url: "https://rickandmortyapi.com/api/character/12",
        created: "2017-11-04T20:32:33.144Z"
      },
      {
        id: 13,
        name: "Alien Googah",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "unknown",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/31"
        ],
        url: "https://rickandmortyapi.com/api/character/13",
        created: "2017-11-04T20:33:30.779Z"
      },
      {
        id: 14,
        name: "Alien Morty",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10"
        ],
        url: "https://rickandmortyapi.com/api/character/14",
        created: "2017-11-04T20:51:31.373Z"
      },
      {
        id: 15,
        name: "Alien Rick",
        status: "unknown",
        species: "Alien",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10"
        ],
        url: "https://rickandmortyapi.com/api/character/15",
        created: "2017-11-04T20:56:13.215Z"
      },
      {
        id: 16,
        name: "Amish Cyborg",
        status: "Dead",
        species: "Alien",
        type: "Parasite",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/15"
        ],
        url: "https://rickandmortyapi.com/api/character/16",
        created: "2017-11-04T21:12:45.235Z"
      },
      {
        id: 17,
        name: "Annie",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
          name: "Anatomy Park",
          url: "https://rickandmortyapi.com/api/location/5"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/3"
        ],
        url: "https://rickandmortyapi.com/api/character/17",
        created: "2017-11-04T22:21:24.481Z"
      },
      {
        id: 18,
        name: "Antenna Morty",
        status: "Alive",
        species: "Human",
        type: "Human with antennae",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/28"
        ],
        url: "https://rickandmortyapi.com/api/character/18",
        created: "2017-11-04T22:25:29.008Z"
      },
      {
        id: 19,
        name: "Antenna Rick",
        status: "unknown",
        species: "Human",
        type: "Human with antennae",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "unknown",
          url: ""
        },
        image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10"
        ],
        url: "https://rickandmortyapi.com/api/character/19",
        created: "2017-11-04T22:28:13.756Z"
      },
      {
        id: 20,
        name: "Ants in my Eyes Johnson",
        status: "unknown",
        species: "Human",
        type: "Human with ants in his eyes",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Interdimensional Cable",
          url: "https://rickandmortyapi.com/api/location/6"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/8"
        ],
        url: "https://rickandmortyapi.com/api/character/20",
        created: "2017-11-04T22:34:53.659Z"
      }
    ].map((obj) => ({
      ...obj,
      firstEpisodeName,
      locationName: obj.location.name
    }))
  };
  const mockedCharactersFilteredPage = {
    info: {
      count: 826,
      pages: 42,
      next: "https://rickandmortyapi.com/api/character?page=2",
      prev: null
    },
    results: [
      {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "unknown",
          url: ""
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z"
      },
      {
        id: 232,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (Evil Rick's Target Dimension)",
          url: "https://rickandmortyapi.com/api/location/34"
        },
        location: {
          name: "Earth (Evil Rick's Target Dimension)",
          url: "https://rickandmortyapi.com/api/location/34"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/232.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/10"
        ],
        url: "https://rickandmortyapi.com/api/character/232",
        created: "2017-12-30T16:29:27.863Z"
      },
      {
        id: 234,
        name: "Morty Smith",
        status: "Dead",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/234.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/6"
        ],
        url: "https://rickandmortyapi.com/api/character/234",
        created: "2017-12-30T16:35:01.223Z"
      }
    ].map((obj) => ({
      ...obj,
      firstEpisodeName,
      locationName: obj.location.name
    }))
  };
  return {
    composablePage: vi.fn().mockReturnValue({
      data: mockedCharactersFirstPage
    }),
    composableFilter: vi.fn().mockReturnValue({
      data: mockedCharactersFilteredPage
    }),
    episodeName: vi.fn().mockImplementation(() => Promise.resolve(firstEpisodeName)),
    mockedCharactersFirstPage,
    mockedCharactersFilteredPage
  };
});

vi.mock('@/composables/reactiveFetchData', () => ({
  useReactiveFetch: mock.composablePage
}));

vi.mock('@/episodeUtils', () => ({
  getEpisodeName: mock.episodeName
}));

describe('App', () => {

  describe('App First Page', () => {

    const wrapper = mount(App);

    it('renders properly', () => {
      expect(wrapper).toBeTruthy();
      expect(wrapper.text()).toContain('Filtro por nombre:');
      expect(wrapper.text()).toMatchSnapshot();
    });

    it('render card styles properly', () => {
      const cardsWrapper = wrapper.findAll('.card__container');

      expect(cardsWrapper).toHaveLength(mock.mockedCharactersFirstPage.results.length);

      cardsWrapper.forEach(async (card) => {
        await card.trigger('mouseover');
        await nextTick();

        const computedStyle = getComputedStyle(card.element);

        expect(computedStyle.filter).toBe('drop-shadow(0 0 2em #61dafbaa)');
        expect(computedStyle.cursor).toBe('pointer');
      });
    });

    it('render cards properly', () => {
      const cards = wrapper.findAllComponents({ name: 'CharacterCard' });

      expect(cards).toHaveLength(mock.mockedCharactersFirstPage.results.length);
      for (let i = 0; i < cards.length; i++) {
        const { location, ...others } = mock.mockedCharactersFirstPage.results[i];
        const { isFavorite } = cards[i].props();
        expect(cards[i].props()).toEqual({
          characterData: { ...others, isFavorite },
          maxWidth: '326px',
          bgColor: '#FFF',
          isFavorite
        })
      }
    });

    it('card emit right event on click', () => {
      const wrapper = mount(App, { attachTo: 'body' });
      const cards = wrapper.findAllComponents({ name: 'CharacterCard' });

      cards.forEach(async (card) => {
        await card.trigger('click');
        await nextTick();

        expect(wrapper.findComponent({ name: 'CharacterDetails' }).isVisible()).toBe(true);
      });
    });
  });

  describe('App Filter Page', () => {

    vi.mocked(useReactiveFetch<Page<ICharacterApi>>).mockReturnValue({
      data: mock.mockedCharactersFilteredPage as unknown as Ref<Page<ICharacterApi> | undefined>,
      error: null as unknown as Ref<any>
    });
    const wrapper = mount(App);

    it('set filter properly', async () => {
      const input = wrapper.find('input');
      const filterValue = 'Morty Smith';

      await input.setValue(filterValue);
      await nextTick();

      expect(input.element.value).toBe(filterValue);
      expect(wrapper.findAllComponents({ name: 'CharacterCard' })).toHaveLength(mock.mockedCharactersFilteredPage.results.length);
    });

    it('render cards properly after filter', () => {
      const cards = wrapper.findAllComponents({ name: 'CharacterCard' });

      for (let i = 0; i < cards.length; i++) {
        const { location, ...others } = mock.mockedCharactersFilteredPage.results[i];
        const { isFavorite } = cards[i].props();
        expect(cards[i].props()).toEqual({
          characterData: { ...others, isFavorite },
          maxWidth: '326px',
          bgColor: '#FFF',
          isFavorite
        })
      }
    });
  });
});
