import { describe, it, expect, vi } from 'vitest';
import { mount,  DOMWrapper } from '@vue/test-utils';
import CharacterDetails from '../CharacterDetails.vue';
import type { Page, ICharacter } from '@/types';
import mockFilteredCharacters from '@/__tests__/mockCharactersFilteredPage.json';

const filteredCharacters = JSON.parse(JSON.stringify(mockFilteredCharacters)) as Page<ICharacter>;

const mock = vi.hoisted(() => {
  const mockedEpisodes = [
    {
      id: 1,
      name: "Pilot",
      air_date: "December 2, 2013",
      episode: "S01E01",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/35",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/62",
        "https://rickandmortyapi.com/api/character/92",
        "https://rickandmortyapi.com/api/character/127",
        "https://rickandmortyapi.com/api/character/144",
        "https://rickandmortyapi.com/api/character/158",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/179",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/249",
        "https://rickandmortyapi.com/api/character/271",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/394",
        "https://rickandmortyapi.com/api/character/395",
        "https://rickandmortyapi.com/api/character/435"
      ],
      url: "https://rickandmortyapi.com/api/episode/1",
      created: "2017-11-10T12:56:33.798Z"
    },
    {
      id: 2,
      name: "Lawnmower Dog",
      air_date: "December 9, 2013",
      episode: "S01E02",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/46",
        "https://rickandmortyapi.com/api/character/63",
        "https://rickandmortyapi.com/api/character/80",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/221",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/246",
        "https://rickandmortyapi.com/api/character/304",
        "https://rickandmortyapi.com/api/character/305",
        "https://rickandmortyapi.com/api/character/306",
        "https://rickandmortyapi.com/api/character/329",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/396",
        "https://rickandmortyapi.com/api/character/397",
        "https://rickandmortyapi.com/api/character/398",
        "https://rickandmortyapi.com/api/character/405"
      ],
      url: "https://rickandmortyapi.com/api/episode/2",
      created: "2017-11-10T12:56:33.916Z"
    },
    {
      id: 3,
      name: "Anatomy Park",
      air_date: "December 16, 2013",
      episode: "S01E03",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/12",
        "https://rickandmortyapi.com/api/character/17",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/45",
        "https://rickandmortyapi.com/api/character/96",
        "https://rickandmortyapi.com/api/character/97",
        "https://rickandmortyapi.com/api/character/98",
        "https://rickandmortyapi.com/api/character/99",
        "https://rickandmortyapi.com/api/character/100",
        "https://rickandmortyapi.com/api/character/101",
        "https://rickandmortyapi.com/api/character/108",
        "https://rickandmortyapi.com/api/character/112",
        "https://rickandmortyapi.com/api/character/114",
        "https://rickandmortyapi.com/api/character/169",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/186",
        "https://rickandmortyapi.com/api/character/201",
        "https://rickandmortyapi.com/api/character/268",
        "https://rickandmortyapi.com/api/character/300",
        "https://rickandmortyapi.com/api/character/302",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/356"
      ],
      url: "https://rickandmortyapi.com/api/episode/3",
      created: "2017-11-10T12:56:34.022Z"
    },
    {
      id: 4,
      name: "M. Night Shaym-Aliens!",
      air_date: "January 13, 2014",
      episode: "S01E04",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/87",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/179",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/191",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/241",
        "https://rickandmortyapi.com/api/character/270",
        "https://rickandmortyapi.com/api/character/337",
        "https://rickandmortyapi.com/api/character/338"
      ],
      url: "https://rickandmortyapi.com/api/episode/4",
      created: "2017-11-10T12:56:34.129Z"
    },
    {
      id: 5,
      name: "Meeseeks and Destroy",
      air_date: "January 20, 2014",
      episode: "S01E05",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/41",
        "https://rickandmortyapi.com/api/character/89",
        "https://rickandmortyapi.com/api/character/116",
        "https://rickandmortyapi.com/api/character/117",
        "https://rickandmortyapi.com/api/character/120",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/193",
        "https://rickandmortyapi.com/api/character/238",
        "https://rickandmortyapi.com/api/character/242",
        "https://rickandmortyapi.com/api/character/271",
        "https://rickandmortyapi.com/api/character/303",
        "https://rickandmortyapi.com/api/character/326",
        "https://rickandmortyapi.com/api/character/333",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/343",
        "https://rickandmortyapi.com/api/character/399",
        "https://rickandmortyapi.com/api/character/400"
      ],
      url: "https://rickandmortyapi.com/api/episode/5",
      created: "2017-11-10T12:56:34.236Z"
    },
    {
      id: 6,
      name: "Rick Potion #9",
      air_date: "January 27, 2014",
      episode: "S01E06",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/58",
        "https://rickandmortyapi.com/api/character/82",
        "https://rickandmortyapi.com/api/character/83",
        "https://rickandmortyapi.com/api/character/92",
        "https://rickandmortyapi.com/api/character/155",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/179",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/216",
        "https://rickandmortyapi.com/api/character/234",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/249",
        "https://rickandmortyapi.com/api/character/251",
        "https://rickandmortyapi.com/api/character/271",
        "https://rickandmortyapi.com/api/character/293",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/343",
        "https://rickandmortyapi.com/api/character/394"
      ],
      url: "https://rickandmortyapi.com/api/episode/6",
      created: "2017-11-10T12:56:34.339Z"
    },
    {
      id: 7,
      name: "Raising Gazorpazorp",
      air_date: "March 10, 2014",
      episode: "S01E07",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/59",
        "https://rickandmortyapi.com/api/character/151",
        "https://rickandmortyapi.com/api/character/168",
        "https://rickandmortyapi.com/api/character/211",
        "https://rickandmortyapi.com/api/character/230",
        "https://rickandmortyapi.com/api/character/258",
        "https://rickandmortyapi.com/api/character/329",
        "https://rickandmortyapi.com/api/character/376",
        "https://rickandmortyapi.com/api/character/401"
      ],
      url: "https://rickandmortyapi.com/api/episode/7",
      created: "2017-11-10T12:56:34.441Z"
    },
    {
      id: 8,
      name: "Rixty Minutes",
      air_date: "March 17, 2014",
      episode: "S01E08",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/20",
        "https://rickandmortyapi.com/api/character/28",
        "https://rickandmortyapi.com/api/character/29",
        "https://rickandmortyapi.com/api/character/34",
        "https://rickandmortyapi.com/api/character/37",
        "https://rickandmortyapi.com/api/character/54",
        "https://rickandmortyapi.com/api/character/88",
        "https://rickandmortyapi.com/api/character/91",
        "https://rickandmortyapi.com/api/character/129",
        "https://rickandmortyapi.com/api/character/134",
        "https://rickandmortyapi.com/api/character/136",
        "https://rickandmortyapi.com/api/character/145",
        "https://rickandmortyapi.com/api/character/153",
        "https://rickandmortyapi.com/api/character/157",
        "https://rickandmortyapi.com/api/character/176",
        "https://rickandmortyapi.com/api/character/183",
        "https://rickandmortyapi.com/api/character/184",
        "https://rickandmortyapi.com/api/character/195",
        "https://rickandmortyapi.com/api/character/207",
        "https://rickandmortyapi.com/api/character/214",
        "https://rickandmortyapi.com/api/character/222",
        "https://rickandmortyapi.com/api/character/250",
        "https://rickandmortyapi.com/api/character/266",
        "https://rickandmortyapi.com/api/character/277",
        "https://rickandmortyapi.com/api/character/279",
        "https://rickandmortyapi.com/api/character/314",
        "https://rickandmortyapi.com/api/character/315",
        "https://rickandmortyapi.com/api/character/316",
        "https://rickandmortyapi.com/api/character/317",
        "https://rickandmortyapi.com/api/character/318",
        "https://rickandmortyapi.com/api/character/351",
        "https://rickandmortyapi.com/api/character/358",
        "https://rickandmortyapi.com/api/character/367",
        "https://rickandmortyapi.com/api/character/370",
        "https://rickandmortyapi.com/api/character/373",
        "https://rickandmortyapi.com/api/character/402",
        "https://rickandmortyapi.com/api/character/403",
        "https://rickandmortyapi.com/api/character/404",
        "https://rickandmortyapi.com/api/character/405",
        "https://rickandmortyapi.com/api/character/406",
        "https://rickandmortyapi.com/api/character/407",
        "https://rickandmortyapi.com/api/character/408",
        "https://rickandmortyapi.com/api/character/409",
        "https://rickandmortyapi.com/api/character/410",
        "https://rickandmortyapi.com/api/character/411",
        "https://rickandmortyapi.com/api/character/412",
        "https://rickandmortyapi.com/api/character/413",
        "https://rickandmortyapi.com/api/character/414",
        "https://rickandmortyapi.com/api/character/415",
        "https://rickandmortyapi.com/api/character/416",
        "https://rickandmortyapi.com/api/character/417",
        "https://rickandmortyapi.com/api/character/418"
      ],
      url: "https://rickandmortyapi.com/api/episode/8",
      created: "2017-11-10T12:56:34.543Z"
    },
    {
      id: 9,
      name: "Something Ricked This Way Comes",
      air_date: "March 24, 2014",
      episode: "S01E09",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/88",
        "https://rickandmortyapi.com/api/character/192",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/243",
        "https://rickandmortyapi.com/api/character/251",
        "https://rickandmortyapi.com/api/character/272",
        "https://rickandmortyapi.com/api/character/307",
        "https://rickandmortyapi.com/api/character/419",
        "https://rickandmortyapi.com/api/character/420",
        "https://rickandmortyapi.com/api/character/421",
        "https://rickandmortyapi.com/api/character/422",
        "https://rickandmortyapi.com/api/character/826"
      ],
      url: "https://rickandmortyapi.com/api/episode/9",
      created: "2017-11-10T12:56:34.645Z"
    },
    {
      id: 10,
      name: "Close Rick-counters of the Rick Kind",
      air_date: "April 7, 2014",
      episode: "S01E10",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/7",
        "https://rickandmortyapi.com/api/character/14",
        "https://rickandmortyapi.com/api/character/15",
        "https://rickandmortyapi.com/api/character/18",
        "https://rickandmortyapi.com/api/character/19",
        "https://rickandmortyapi.com/api/character/21",
        "https://rickandmortyapi.com/api/character/22",
        "https://rickandmortyapi.com/api/character/27",
        "https://rickandmortyapi.com/api/character/39",
        "https://rickandmortyapi.com/api/character/53",
        "https://rickandmortyapi.com/api/character/77",
        "https://rickandmortyapi.com/api/character/78",
        "https://rickandmortyapi.com/api/character/79",
        "https://rickandmortyapi.com/api/character/82",
        "https://rickandmortyapi.com/api/character/83",
        "https://rickandmortyapi.com/api/character/84",
        "https://rickandmortyapi.com/api/character/85",
        "https://rickandmortyapi.com/api/character/86",
        "https://rickandmortyapi.com/api/character/103",
        "https://rickandmortyapi.com/api/character/113",
        "https://rickandmortyapi.com/api/character/118",
        "https://rickandmortyapi.com/api/character/119",
        "https://rickandmortyapi.com/api/character/152",
        "https://rickandmortyapi.com/api/character/164",
        "https://rickandmortyapi.com/api/character/177",
        "https://rickandmortyapi.com/api/character/209",
        "https://rickandmortyapi.com/api/character/215",
        "https://rickandmortyapi.com/api/character/232",
        "https://rickandmortyapi.com/api/character/242",
        "https://rickandmortyapi.com/api/character/274",
        "https://rickandmortyapi.com/api/character/290",
        "https://rickandmortyapi.com/api/character/294",
        "https://rickandmortyapi.com/api/character/295",
        "https://rickandmortyapi.com/api/character/298",
        "https://rickandmortyapi.com/api/character/299",
        "https://rickandmortyapi.com/api/character/329",
        "https://rickandmortyapi.com/api/character/330",
        "https://rickandmortyapi.com/api/character/339",
        "https://rickandmortyapi.com/api/character/349",
        "https://rickandmortyapi.com/api/character/359",
        "https://rickandmortyapi.com/api/character/381",
        "https://rickandmortyapi.com/api/character/389",
        "https://rickandmortyapi.com/api/character/405",
        "https://rickandmortyapi.com/api/character/424",
        "https://rickandmortyapi.com/api/character/425",
        "https://rickandmortyapi.com/api/character/426",
        "https://rickandmortyapi.com/api/character/427",
        "https://rickandmortyapi.com/api/character/428",
        "https://rickandmortyapi.com/api/character/429",
        "https://rickandmortyapi.com/api/character/430",
        "https://rickandmortyapi.com/api/character/431",
        "https://rickandmortyapi.com/api/character/432",
        "https://rickandmortyapi.com/api/character/433",
        "https://rickandmortyapi.com/api/character/434",
        "https://rickandmortyapi.com/api/character/663"
      ],
      url: "https://rickandmortyapi.com/api/episode/10",
      created: "2017-11-10T12:56:34.747Z"
    },
    {
      id: 11,
      name: "Ricksy Business",
      air_date: "April 14, 2014",
      episode: "S01E11",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/7",
        "https://rickandmortyapi.com/api/character/35",
        "https://rickandmortyapi.com/api/character/47",
        "https://rickandmortyapi.com/api/character/58",
        "https://rickandmortyapi.com/api/character/88",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/210",
        "https://rickandmortyapi.com/api/character/216",
        "https://rickandmortyapi.com/api/character/251",
        "https://rickandmortyapi.com/api/character/282",
        "https://rickandmortyapi.com/api/character/295",
        "https://rickandmortyapi.com/api/character/308",
        "https://rickandmortyapi.com/api/character/326",
        "https://rickandmortyapi.com/api/character/327",
        "https://rickandmortyapi.com/api/character/331",
        "https://rickandmortyapi.com/api/character/333",
        "https://rickandmortyapi.com/api/character/344",
        "https://rickandmortyapi.com/api/character/362",
        "https://rickandmortyapi.com/api/character/389",
        "https://rickandmortyapi.com/api/character/395",
        "https://rickandmortyapi.com/api/character/405",
        "https://rickandmortyapi.com/api/character/423",
        "https://rickandmortyapi.com/api/character/435",
        "https://rickandmortyapi.com/api/character/436"
      ],
      url: "https://rickandmortyapi.com/api/episode/11",
      created: "2017-11-10T12:56:34.850Z"
    },
    {
      id: 12,
      name: "A Rickle in Time",
      air_date: "July 26, 2015",
      episode: "S02E01",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/11",
        "https://rickandmortyapi.com/api/character/64",
        "https://rickandmortyapi.com/api/character/237",
        "https://rickandmortyapi.com/api/character/313",
        "https://rickandmortyapi.com/api/character/437",
        "https://rickandmortyapi.com/api/character/438",
        "https://rickandmortyapi.com/api/character/439",
        "https://rickandmortyapi.com/api/character/440"
      ],
      url: "https://rickandmortyapi.com/api/episode/12",
      created: "2017-11-10T12:56:34.953Z"
    },
    {
      id: 13,
      name: "Mortynight Run",
      air_date: "August 2, 2015",
      episode: "S02E02",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/23",
        "https://rickandmortyapi.com/api/character/28",
        "https://rickandmortyapi.com/api/character/34",
        "https://rickandmortyapi.com/api/character/106",
        "https://rickandmortyapi.com/api/character/122",
        "https://rickandmortyapi.com/api/character/129",
        "https://rickandmortyapi.com/api/character/131",
        "https://rickandmortyapi.com/api/character/133",
        "https://rickandmortyapi.com/api/character/136",
        "https://rickandmortyapi.com/api/character/174",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/196",
        "https://rickandmortyapi.com/api/character/207",
        "https://rickandmortyapi.com/api/character/242",
        "https://rickandmortyapi.com/api/character/257",
        "https://rickandmortyapi.com/api/character/282",
        "https://rickandmortyapi.com/api/character/309",
        "https://rickandmortyapi.com/api/character/311",
        "https://rickandmortyapi.com/api/character/362",
        "https://rickandmortyapi.com/api/character/386",
        "https://rickandmortyapi.com/api/character/393",
        "https://rickandmortyapi.com/api/character/436",
        "https://rickandmortyapi.com/api/character/441",
        "https://rickandmortyapi.com/api/character/442",
        "https://rickandmortyapi.com/api/character/443",
        "https://rickandmortyapi.com/api/character/444",
        "https://rickandmortyapi.com/api/character/445",
        "https://rickandmortyapi.com/api/character/446",
        "https://rickandmortyapi.com/api/character/447",
        "https://rickandmortyapi.com/api/character/448",
        "https://rickandmortyapi.com/api/character/449",
        "https://rickandmortyapi.com/api/character/450",
        "https://rickandmortyapi.com/api/character/451"
      ],
      url: "https://rickandmortyapi.com/api/episode/13",
      created: "2017-11-10T12:56:35.055Z"
    },
    {
      id: 14,
      name: "Auto Erotic Assimilation",
      air_date: "August 9, 2015",
      episode: "S02E03",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/36",
        "https://rickandmortyapi.com/api/character/50",
        "https://rickandmortyapi.com/api/character/90",
        "https://rickandmortyapi.com/api/character/188",
        "https://rickandmortyapi.com/api/character/249",
        "https://rickandmortyapi.com/api/character/301",
        "https://rickandmortyapi.com/api/character/336",
        "https://rickandmortyapi.com/api/character/355",
        "https://rickandmortyapi.com/api/character/372"
      ],
      url: "https://rickandmortyapi.com/api/episode/14",
      created: "2017-11-10T12:56:35.158Z"
    },
    {
      id: 15,
      name: "Total Rickall",
      air_date: "August 16, 2015",
      episode: "S02E04",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/16",
        "https://rickandmortyapi.com/api/character/31",
        "https://rickandmortyapi.com/api/character/32",
        "https://rickandmortyapi.com/api/character/76",
        "https://rickandmortyapi.com/api/character/109",
        "https://rickandmortyapi.com/api/character/128",
        "https://rickandmortyapi.com/api/character/141",
        "https://rickandmortyapi.com/api/character/154",
        "https://rickandmortyapi.com/api/character/169",
        "https://rickandmortyapi.com/api/character/236",
        "https://rickandmortyapi.com/api/character/244",
        "https://rickandmortyapi.com/api/character/248",
        "https://rickandmortyapi.com/api/character/259",
        "https://rickandmortyapi.com/api/character/262",
        "https://rickandmortyapi.com/api/character/280",
        "https://rickandmortyapi.com/api/character/324",
        "https://rickandmortyapi.com/api/character/329",
        "https://rickandmortyapi.com/api/character/352",
        "https://rickandmortyapi.com/api/character/391"
      ],
      url: "https://rickandmortyapi.com/api/episode/15",
      created: "2017-11-10T12:56:35.261Z"
    },
    {
      id: 16,
      name: "Get Schwifty",
      air_date: "August 23, 2015",
      episode: "S02E05",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/24",
        "https://rickandmortyapi.com/api/character/47",
        "https://rickandmortyapi.com/api/character/115",
        "https://rickandmortyapi.com/api/character/124",
        "https://rickandmortyapi.com/api/character/138",
        "https://rickandmortyapi.com/api/character/161",
        "https://rickandmortyapi.com/api/character/162",
        "https://rickandmortyapi.com/api/character/172",
        "https://rickandmortyapi.com/api/character/182",
        "https://rickandmortyapi.com/api/character/199",
        "https://rickandmortyapi.com/api/character/212",
        "https://rickandmortyapi.com/api/character/213",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/241",
        "https://rickandmortyapi.com/api/character/253",
        "https://rickandmortyapi.com/api/character/255",
        "https://rickandmortyapi.com/api/character/272",
        "https://rickandmortyapi.com/api/character/309",
        "https://rickandmortyapi.com/api/character/329",
        "https://rickandmortyapi.com/api/character/331",
        "https://rickandmortyapi.com/api/character/344",
        "https://rickandmortyapi.com/api/character/346",
        "https://rickandmortyapi.com/api/character/347",
        "https://rickandmortyapi.com/api/character/395",
        "https://rickandmortyapi.com/api/character/452",
        "https://rickandmortyapi.com/api/character/454"
      ],
      url: "https://rickandmortyapi.com/api/episode/16",
      created: "2017-11-10T12:56:35.364Z"
    },
    {
      id: 17,
      name: "The Ricks Must Be Crazy",
      air_date: "August 30, 2015",
      episode: "S02E06",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/28",
        "https://rickandmortyapi.com/api/character/34",
        "https://rickandmortyapi.com/api/character/65",
        "https://rickandmortyapi.com/api/character/129",
        "https://rickandmortyapi.com/api/character/159",
        "https://rickandmortyapi.com/api/character/160",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/197",
        "https://rickandmortyapi.com/api/character/207",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/266",
        "https://rickandmortyapi.com/api/character/348",
        "https://rickandmortyapi.com/api/character/364",
        "https://rickandmortyapi.com/api/character/388",
        "https://rickandmortyapi.com/api/character/753"
      ],
      url: "https://rickandmortyapi.com/api/episode/17",
      created: "2017-11-10T12:56:35.467Z"
    },
    {
      id: 18,
      name: "Big Trouble in Little Sanchez",
      air_date: "September 13, 2015",
      episode: "S02E07",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/40",
        "https://rickandmortyapi.com/api/character/55",
        "https://rickandmortyapi.com/api/character/66",
        "https://rickandmortyapi.com/api/character/131",
        "https://rickandmortyapi.com/api/character/132",
        "https://rickandmortyapi.com/api/character/146",
        "https://rickandmortyapi.com/api/character/148",
        "https://rickandmortyapi.com/api/character/163",
        "https://rickandmortyapi.com/api/character/178",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/272",
        "https://rickandmortyapi.com/api/character/310",
        "https://rickandmortyapi.com/api/character/353",
        "https://rickandmortyapi.com/api/character/354",
        "https://rickandmortyapi.com/api/character/358",
        "https://rickandmortyapi.com/api/character/374",
        "https://rickandmortyapi.com/api/character/386",
        "https://rickandmortyapi.com/api/character/387",
        "https://rickandmortyapi.com/api/character/453"
      ],
      url: "https://rickandmortyapi.com/api/episode/18",
      created: "2017-11-10T12:56:35.569Z"
    },
    {
      id: 19,
      name: "Interdimensional Cable 2: Tempting Fate",
      air_date: "September 20, 2015",
      episode: "S02E08",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/23",
        "https://rickandmortyapi.com/api/character/35",
        "https://rickandmortyapi.com/api/character/49",
        "https://rickandmortyapi.com/api/character/51",
        "https://rickandmortyapi.com/api/character/105",
        "https://rickandmortyapi.com/api/character/121",
        "https://rickandmortyapi.com/api/character/126",
        "https://rickandmortyapi.com/api/character/133",
        "https://rickandmortyapi.com/api/character/153",
        "https://rickandmortyapi.com/api/character/173",
        "https://rickandmortyapi.com/api/character/199",
        "https://rickandmortyapi.com/api/character/205",
        "https://rickandmortyapi.com/api/character/223",
        "https://rickandmortyapi.com/api/character/224",
        "https://rickandmortyapi.com/api/character/225",
        "https://rickandmortyapi.com/api/character/254",
        "https://rickandmortyapi.com/api/character/260",
        "https://rickandmortyapi.com/api/character/263",
        "https://rickandmortyapi.com/api/character/264",
        "https://rickandmortyapi.com/api/character/275",
        "https://rickandmortyapi.com/api/character/312",
        "https://rickandmortyapi.com/api/character/321",
        "https://rickandmortyapi.com/api/character/334",
        "https://rickandmortyapi.com/api/character/362",
        "https://rickandmortyapi.com/api/character/371",
        "https://rickandmortyapi.com/api/character/383",
        "https://rickandmortyapi.com/api/character/384",
        "https://rickandmortyapi.com/api/character/435",
        "https://rickandmortyapi.com/api/character/454",
        "https://rickandmortyapi.com/api/character/455",
        "https://rickandmortyapi.com/api/character/456",
        "https://rickandmortyapi.com/api/character/457",
        "https://rickandmortyapi.com/api/character/458",
        "https://rickandmortyapi.com/api/character/459",
        "https://rickandmortyapi.com/api/character/460"
      ],
      url: "https://rickandmortyapi.com/api/episode/19",
      created: "2017-11-10T12:56:35.669Z"
    },
    {
      id: 20,
      name: "Look Who's Purging Now",
      air_date: "September 27, 2015",
      episode: "S02E09",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/26",
        "https://rickandmortyapi.com/api/character/139",
        "https://rickandmortyapi.com/api/character/202",
        "https://rickandmortyapi.com/api/character/273",
        "https://rickandmortyapi.com/api/character/341"
      ],
      url: "https://rickandmortyapi.com/api/episode/20",
      created: "2017-11-10T12:56:35.772Z"
    },
    {
      id: 21,
      name: "The Wedding Squanchers",
      air_date: "October 4, 2015",
      episode: "S02E10",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/23",
        "https://rickandmortyapi.com/api/character/47",
        "https://rickandmortyapi.com/api/character/55",
        "https://rickandmortyapi.com/api/character/75",
        "https://rickandmortyapi.com/api/character/102",
        "https://rickandmortyapi.com/api/character/130",
        "https://rickandmortyapi.com/api/character/131",
        "https://rickandmortyapi.com/api/character/133",
        "https://rickandmortyapi.com/api/character/194",
        "https://rickandmortyapi.com/api/character/199",
        "https://rickandmortyapi.com/api/character/203",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/244",
        "https://rickandmortyapi.com/api/character/256",
        "https://rickandmortyapi.com/api/character/261",
        "https://rickandmortyapi.com/api/character/308",
        "https://rickandmortyapi.com/api/character/309",
        "https://rickandmortyapi.com/api/character/311",
        "https://rickandmortyapi.com/api/character/331",
        "https://rickandmortyapi.com/api/character/344",
        "https://rickandmortyapi.com/api/character/358",
        "https://rickandmortyapi.com/api/character/362",
        "https://rickandmortyapi.com/api/character/379",
        "https://rickandmortyapi.com/api/character/454"
      ],
      url: "https://rickandmortyapi.com/api/episode/21",
      created: "2017-11-10T12:56:35.875Z"
    },
    {
      id: 22,
      name: "The Rickshank Rickdemption",
      air_date: "April 1, 2017",
      episode: "S03E01",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/21",
        "https://rickandmortyapi.com/api/character/22",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/42",
        "https://rickandmortyapi.com/api/character/47",
        "https://rickandmortyapi.com/api/character/48",
        "https://rickandmortyapi.com/api/character/57",
        "https://rickandmortyapi.com/api/character/69",
        "https://rickandmortyapi.com/api/character/71",
        "https://rickandmortyapi.com/api/character/86",
        "https://rickandmortyapi.com/api/character/94",
        "https://rickandmortyapi.com/api/character/95",
        "https://rickandmortyapi.com/api/character/103",
        "https://rickandmortyapi.com/api/character/150",
        "https://rickandmortyapi.com/api/character/152",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/200",
        "https://rickandmortyapi.com/api/character/215",
        "https://rickandmortyapi.com/api/character/231",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/274",
        "https://rickandmortyapi.com/api/character/285",
        "https://rickandmortyapi.com/api/character/286",
        "https://rickandmortyapi.com/api/character/294",
        "https://rickandmortyapi.com/api/character/295",
        "https://rickandmortyapi.com/api/character/330",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/344",
        "https://rickandmortyapi.com/api/character/378",
        "https://rickandmortyapi.com/api/character/380",
        "https://rickandmortyapi.com/api/character/385",
        "https://rickandmortyapi.com/api/character/389",
        "https://rickandmortyapi.com/api/character/461",
        "https://rickandmortyapi.com/api/character/462",
        "https://rickandmortyapi.com/api/character/463",
        "https://rickandmortyapi.com/api/character/464",
        "https://rickandmortyapi.com/api/character/465",
        "https://rickandmortyapi.com/api/character/466",
        "https://rickandmortyapi.com/api/character/592"
      ],
      url: "https://rickandmortyapi.com/api/episode/22",
      created: "2017-11-10T12:56:35.983Z"
    },
    {
      id: 23,
      name: "Rickmancing the Stone",
      air_date: "July 30, 2017",
      episode: "S03E02",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/25",
        "https://rickandmortyapi.com/api/character/52",
        "https://rickandmortyapi.com/api/character/68",
        "https://rickandmortyapi.com/api/character/110",
        "https://rickandmortyapi.com/api/character/111",
        "https://rickandmortyapi.com/api/character/140",
        "https://rickandmortyapi.com/api/character/156",
        "https://rickandmortyapi.com/api/character/217",
        "https://rickandmortyapi.com/api/character/218",
        "https://rickandmortyapi.com/api/character/219",
        "https://rickandmortyapi.com/api/character/228",
        "https://rickandmortyapi.com/api/character/323",
        "https://rickandmortyapi.com/api/character/342"
      ],
      url: "https://rickandmortyapi.com/api/episode/23",
      created: "2017-11-10T12:56:36.100Z"
    },
    {
      id: 24,
      name: "Pickle Rick",
      air_date: "August 6, 2017",
      episode: "S03E03",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/9",
        "https://rickandmortyapi.com/api/character/70",
        "https://rickandmortyapi.com/api/character/107",
        "https://rickandmortyapi.com/api/character/167",
        "https://rickandmortyapi.com/api/character/171",
        "https://rickandmortyapi.com/api/character/189",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/265",
        "https://rickandmortyapi.com/api/character/272",
        "https://rickandmortyapi.com/api/character/276",
        "https://rickandmortyapi.com/api/character/329"
      ],
      url: "https://rickandmortyapi.com/api/episode/24",
      created: "2017-11-10T12:56:36.206Z"
    },
    {
      id: 25,
      name: "Vindicators 3: The Return of Worldender",
      air_date: "August 13, 2017",
      episode: "S03E04",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/10",
        "https://rickandmortyapi.com/api/character/23",
        "https://rickandmortyapi.com/api/character/35",
        "https://rickandmortyapi.com/api/character/60",
        "https://rickandmortyapi.com/api/character/81",
        "https://rickandmortyapi.com/api/character/88",
        "https://rickandmortyapi.com/api/character/93",
        "https://rickandmortyapi.com/api/character/104",
        "https://rickandmortyapi.com/api/character/125",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/198",
        "https://rickandmortyapi.com/api/character/208",
        "https://rickandmortyapi.com/api/character/216",
        "https://rickandmortyapi.com/api/character/226",
        "https://rickandmortyapi.com/api/character/251",
        "https://rickandmortyapi.com/api/character/252",
        "https://rickandmortyapi.com/api/character/282",
        "https://rickandmortyapi.com/api/character/309",
        "https://rickandmortyapi.com/api/character/311",
        "https://rickandmortyapi.com/api/character/333",
        "https://rickandmortyapi.com/api/character/340",
        "https://rickandmortyapi.com/api/character/362",
        "https://rickandmortyapi.com/api/character/375",
        "https://rickandmortyapi.com/api/character/382",
        "https://rickandmortyapi.com/api/character/395",
        "https://rickandmortyapi.com/api/character/435"
      ],
      url: "https://rickandmortyapi.com/api/episode/25",
      created: "2017-11-10T12:56:36.310Z"
    },
    {
      id: 26,
      name: "The Whirly Dirly Conspiracy",
      air_date: "August 20, 2017",
      episode: "S03E05",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/23",
        "https://rickandmortyapi.com/api/character/47",
        "https://rickandmortyapi.com/api/character/115",
        "https://rickandmortyapi.com/api/character/137",
        "https://rickandmortyapi.com/api/character/142",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/204",
        "https://rickandmortyapi.com/api/character/296",
        "https://rickandmortyapi.com/api/character/297",
        "https://rickandmortyapi.com/api/character/319",
        "https://rickandmortyapi.com/api/character/320",
        "https://rickandmortyapi.com/api/character/365",
        "https://rickandmortyapi.com/api/character/369",
        "https://rickandmortyapi.com/api/character/467",
        "https://rickandmortyapi.com/api/character/468",
        "https://rickandmortyapi.com/api/character/469"
      ],
      url: "https://rickandmortyapi.com/api/episode/26",
      created: "2017-11-10T12:56:36.413Z"
    },
    {
      id: 27,
      name: "Rest and Ricklaxation",
      air_date: "August 27, 2017",
      episode: "S03E06",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/6",
        "https://rickandmortyapi.com/api/character/124",
        "https://rickandmortyapi.com/api/character/170",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/227",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/246",
        "https://rickandmortyapi.com/api/character/272",
        "https://rickandmortyapi.com/api/character/332",
        "https://rickandmortyapi.com/api/character/360",
        "https://rickandmortyapi.com/api/character/361",
        "https://rickandmortyapi.com/api/character/365",
        "https://rickandmortyapi.com/api/character/470",
        "https://rickandmortyapi.com/api/character/471"
      ],
      url: "https://rickandmortyapi.com/api/episode/27",
      created: "2017-11-10T12:56:36.515Z"
    },
    {
      id: 28,
      name: "The Ricklantis Mixup",
      air_date: "September 10, 2017",
      episode: "S03E07",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/8",
        "https://rickandmortyapi.com/api/character/18",
        "https://rickandmortyapi.com/api/character/22",
        "https://rickandmortyapi.com/api/character/27",
        "https://rickandmortyapi.com/api/character/43",
        "https://rickandmortyapi.com/api/character/44",
        "https://rickandmortyapi.com/api/character/48",
        "https://rickandmortyapi.com/api/character/56",
        "https://rickandmortyapi.com/api/character/61",
        "https://rickandmortyapi.com/api/character/72",
        "https://rickandmortyapi.com/api/character/73",
        "https://rickandmortyapi.com/api/character/74",
        "https://rickandmortyapi.com/api/character/78",
        "https://rickandmortyapi.com/api/character/85",
        "https://rickandmortyapi.com/api/character/86",
        "https://rickandmortyapi.com/api/character/118",
        "https://rickandmortyapi.com/api/character/123",
        "https://rickandmortyapi.com/api/character/135",
        "https://rickandmortyapi.com/api/character/143",
        "https://rickandmortyapi.com/api/character/165",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/187",
        "https://rickandmortyapi.com/api/character/206",
        "https://rickandmortyapi.com/api/character/220",
        "https://rickandmortyapi.com/api/character/229",
        "https://rickandmortyapi.com/api/character/233",
        "https://rickandmortyapi.com/api/character/235",
        "https://rickandmortyapi.com/api/character/267",
        "https://rickandmortyapi.com/api/character/278",
        "https://rickandmortyapi.com/api/character/281",
        "https://rickandmortyapi.com/api/character/283",
        "https://rickandmortyapi.com/api/character/284",
        "https://rickandmortyapi.com/api/character/287",
        "https://rickandmortyapi.com/api/character/288",
        "https://rickandmortyapi.com/api/character/289",
        "https://rickandmortyapi.com/api/character/291",
        "https://rickandmortyapi.com/api/character/292",
        "https://rickandmortyapi.com/api/character/322",
        "https://rickandmortyapi.com/api/character/325",
        "https://rickandmortyapi.com/api/character/328",
        "https://rickandmortyapi.com/api/character/345",
        "https://rickandmortyapi.com/api/character/366",
        "https://rickandmortyapi.com/api/character/367",
        "https://rickandmortyapi.com/api/character/392",
        "https://rickandmortyapi.com/api/character/472",
        "https://rickandmortyapi.com/api/character/473",
        "https://rickandmortyapi.com/api/character/474",
        "https://rickandmortyapi.com/api/character/475",
        "https://rickandmortyapi.com/api/character/476",
        "https://rickandmortyapi.com/api/character/477",
        "https://rickandmortyapi.com/api/character/478",
        "https://rickandmortyapi.com/api/character/479",
        "https://rickandmortyapi.com/api/character/480",
        "https://rickandmortyapi.com/api/character/481",
        "https://rickandmortyapi.com/api/character/482",
        "https://rickandmortyapi.com/api/character/483",
        "https://rickandmortyapi.com/api/character/484",
        "https://rickandmortyapi.com/api/character/485",
        "https://rickandmortyapi.com/api/character/486",
        "https://rickandmortyapi.com/api/character/487",
        "https://rickandmortyapi.com/api/character/488",
        "https://rickandmortyapi.com/api/character/489"
      ],
      url: "https://rickandmortyapi.com/api/episode/28",
      created: "2017-11-10T12:56:36.618Z"
    },
    {
      id: 29,
      name: "Morty's Mind Blowers",
      air_date: "September 17, 2017",
      episode: "S03E08",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/33",
        "https://rickandmortyapi.com/api/character/67",
        "https://rickandmortyapi.com/api/character/147",
        "https://rickandmortyapi.com/api/character/149",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/242",
        "https://rickandmortyapi.com/api/character/244",
        "https://rickandmortyapi.com/api/character/251",
        "https://rickandmortyapi.com/api/character/272",
        "https://rickandmortyapi.com/api/character/329",
        "https://rickandmortyapi.com/api/character/368",
        "https://rickandmortyapi.com/api/character/377",
        "https://rickandmortyapi.com/api/character/390",
        "https://rickandmortyapi.com/api/character/490",
        "https://rickandmortyapi.com/api/character/491"
      ],
      url: "https://rickandmortyapi.com/api/episode/29",
      created: "2017-11-10T12:56:36.726Z"
    },
    {
      id: 30,
      name: "The ABC's of Beth",
      air_date: "September 24, 2017",
      episode: "S03E09",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/58",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/185",
        "https://rickandmortyapi.com/api/character/190",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/244",
        "https://rickandmortyapi.com/api/character/245",
        "https://rickandmortyapi.com/api/character/249",
        "https://rickandmortyapi.com/api/character/329",
        "https://rickandmortyapi.com/api/character/350",
        "https://rickandmortyapi.com/api/character/357",
        "https://rickandmortyapi.com/api/character/363",
        "https://rickandmortyapi.com/api/character/492"
      ],
      url: "https://rickandmortyapi.com/api/episode/30",
      created: "2017-11-10T12:56:36.828Z"
    },
    {
      id: 31,
      name: "The Rickchurian Mortydate",
      air_date: "October 1, 2017",
      episode: "S03E10",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/13",
        "https://rickandmortyapi.com/api/character/30",
        "https://rickandmortyapi.com/api/character/166",
        "https://rickandmortyapi.com/api/character/244",
        "https://rickandmortyapi.com/api/character/247",
        "https://rickandmortyapi.com/api/character/269",
        "https://rickandmortyapi.com/api/character/335",
        "https://rickandmortyapi.com/api/character/347",
        "https://rickandmortyapi.com/api/character/493"
      ],
      url: "https://rickandmortyapi.com/api/episode/31",
      created: "2017-11-10T12:56:36.929Z"
    },
    {
      id: 32,
      name: "Edge of Tomorty: Rick, Die, Rickpeat",
      air_date: "November 10, 2019",
      episode: "S04E01",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/242",
        "https://rickandmortyapi.com/api/character/494",
        "https://rickandmortyapi.com/api/character/495",
        "https://rickandmortyapi.com/api/character/496",
        "https://rickandmortyapi.com/api/character/497",
        "https://rickandmortyapi.com/api/character/498",
        "https://rickandmortyapi.com/api/character/499",
        "https://rickandmortyapi.com/api/character/500",
        "https://rickandmortyapi.com/api/character/501",
        "https://rickandmortyapi.com/api/character/502",
        "https://rickandmortyapi.com/api/character/503",
        "https://rickandmortyapi.com/api/character/504",
        "https://rickandmortyapi.com/api/character/505",
        "https://rickandmortyapi.com/api/character/506",
        "https://rickandmortyapi.com/api/character/507",
        "https://rickandmortyapi.com/api/character/508",
        "https://rickandmortyapi.com/api/character/509",
        "https://rickandmortyapi.com/api/character/510",
        "https://rickandmortyapi.com/api/character/511",
        "https://rickandmortyapi.com/api/character/512",
        "https://rickandmortyapi.com/api/character/513",
        "https://rickandmortyapi.com/api/character/514",
        "https://rickandmortyapi.com/api/character/515",
        "https://rickandmortyapi.com/api/character/516",
        "https://rickandmortyapi.com/api/character/517",
        "https://rickandmortyapi.com/api/character/518",
        "https://rickandmortyapi.com/api/character/519",
        "https://rickandmortyapi.com/api/character/520",
        "https://rickandmortyapi.com/api/character/521",
        "https://rickandmortyapi.com/api/character/522",
        "https://rickandmortyapi.com/api/character/523",
        "https://rickandmortyapi.com/api/character/524"
      ],
      url: "https://rickandmortyapi.com/api/episode/32",
      created: "2020-04-30T06:52:04.495Z"
    },
    {
      id: 33,
      name: "The Old Man and the Seat",
      air_date: "November 17, 2019",
      episode: "S04E02",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/525",
        "https://rickandmortyapi.com/api/character/526",
        "https://rickandmortyapi.com/api/character/527",
        "https://rickandmortyapi.com/api/character/528",
        "https://rickandmortyapi.com/api/character/529",
        "https://rickandmortyapi.com/api/character/530",
        "https://rickandmortyapi.com/api/character/531",
        "https://rickandmortyapi.com/api/character/532",
        "https://rickandmortyapi.com/api/character/533",
        "https://rickandmortyapi.com/api/character/534",
        "https://rickandmortyapi.com/api/character/535",
        "https://rickandmortyapi.com/api/character/536",
        "https://rickandmortyapi.com/api/character/537",
        "https://rickandmortyapi.com/api/character/538",
        "https://rickandmortyapi.com/api/character/539",
        "https://rickandmortyapi.com/api/character/540",
        "https://rickandmortyapi.com/api/character/541",
        "https://rickandmortyapi.com/api/character/542",
        "https://rickandmortyapi.com/api/character/543"
      ],
      url: "https://rickandmortyapi.com/api/episode/33",
      created: "2020-04-30T06:52:04.498Z"
    },
    {
      id: 34,
      name: "One Crew Over the Crewcoo's Morty",
      air_date: "November 24, 2019",
      episode: "S04E03",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/244",
        "https://rickandmortyapi.com/api/character/544",
        "https://rickandmortyapi.com/api/character/545",
        "https://rickandmortyapi.com/api/character/546",
        "https://rickandmortyapi.com/api/character/547",
        "https://rickandmortyapi.com/api/character/548",
        "https://rickandmortyapi.com/api/character/549",
        "https://rickandmortyapi.com/api/character/550",
        "https://rickandmortyapi.com/api/character/551",
        "https://rickandmortyapi.com/api/character/552",
        "https://rickandmortyapi.com/api/character/553",
        "https://rickandmortyapi.com/api/character/554",
        "https://rickandmortyapi.com/api/character/555",
        "https://rickandmortyapi.com/api/character/556",
        "https://rickandmortyapi.com/api/character/557",
        "https://rickandmortyapi.com/api/character/558",
        "https://rickandmortyapi.com/api/character/559",
        "https://rickandmortyapi.com/api/character/560",
        "https://rickandmortyapi.com/api/character/561"
      ],
      url: "https://rickandmortyapi.com/api/episode/34",
      created: "2020-04-30T06:52:04.498Z"
    },
    {
      id: 35,
      name: "Claw and Hoarder: Special Ricktim's Morty",
      air_date: "December 8, 2019",
      episode: "S04E04",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/562",
        "https://rickandmortyapi.com/api/character/563",
        "https://rickandmortyapi.com/api/character/564",
        "https://rickandmortyapi.com/api/character/565",
        "https://rickandmortyapi.com/api/character/566",
        "https://rickandmortyapi.com/api/character/567",
        "https://rickandmortyapi.com/api/character/568",
        "https://rickandmortyapi.com/api/character/569",
        "https://rickandmortyapi.com/api/character/570"
      ],
      url: "https://rickandmortyapi.com/api/episode/35",
      created: "2020-04-30T06:52:04.498Z"
    },
    {
      id: 36,
      name: "Rattlestar Ricklactica",
      air_date: "December 15, 2019",
      episode: "S04E05",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/251",
        "https://rickandmortyapi.com/api/character/313",
        "https://rickandmortyapi.com/api/character/365",
        "https://rickandmortyapi.com/api/character/571",
        "https://rickandmortyapi.com/api/character/572",
        "https://rickandmortyapi.com/api/character/573",
        "https://rickandmortyapi.com/api/character/574",
        "https://rickandmortyapi.com/api/character/575",
        "https://rickandmortyapi.com/api/character/576",
        "https://rickandmortyapi.com/api/character/577",
        "https://rickandmortyapi.com/api/character/578",
        "https://rickandmortyapi.com/api/character/579",
        "https://rickandmortyapi.com/api/character/580",
        "https://rickandmortyapi.com/api/character/581",
        "https://rickandmortyapi.com/api/character/582",
        "https://rickandmortyapi.com/api/character/583",
        "https://rickandmortyapi.com/api/character/584",
        "https://rickandmortyapi.com/api/character/585",
        "https://rickandmortyapi.com/api/character/586",
        "https://rickandmortyapi.com/api/character/587",
        "https://rickandmortyapi.com/api/character/588",
        "https://rickandmortyapi.com/api/character/589",
        "https://rickandmortyapi.com/api/character/590",
        "https://rickandmortyapi.com/api/character/591"
      ],
      url: "https://rickandmortyapi.com/api/episode/36",
      created: "2020-04-30T06:52:04.499Z"
    },
    {
      id: 37,
      name: "Never Ricking Morty",
      air_date: "May 3, 2020",
      episode: "S04E06",
      characters: [
        "https://rickandmortyapi.com/api/character/593",
        "https://rickandmortyapi.com/api/character/594",
        "https://rickandmortyapi.com/api/character/595",
        "https://rickandmortyapi.com/api/character/596",
        "https://rickandmortyapi.com/api/character/597",
        "https://rickandmortyapi.com/api/character/598",
        "https://rickandmortyapi.com/api/character/599",
        "https://rickandmortyapi.com/api/character/600",
        "https://rickandmortyapi.com/api/character/601",
        "https://rickandmortyapi.com/api/character/602",
        "https://rickandmortyapi.com/api/character/603",
        "https://rickandmortyapi.com/api/character/604",
        "https://rickandmortyapi.com/api/character/605",
        "https://rickandmortyapi.com/api/character/606",
        "https://rickandmortyapi.com/api/character/607",
        "https://rickandmortyapi.com/api/character/608",
        "https://rickandmortyapi.com/api/character/609",
        "https://rickandmortyapi.com/api/character/610",
        "https://rickandmortyapi.com/api/character/611",
        "https://rickandmortyapi.com/api/character/612",
        "https://rickandmortyapi.com/api/character/613",
        "https://rickandmortyapi.com/api/character/614",
        "https://rickandmortyapi.com/api/character/615",
        "https://rickandmortyapi.com/api/character/616",
        "https://rickandmortyapi.com/api/character/617",
        "https://rickandmortyapi.com/api/character/618",
        "https://rickandmortyapi.com/api/character/619",
        "https://rickandmortyapi.com/api/character/620",
        "https://rickandmortyapi.com/api/character/621",
        "https://rickandmortyapi.com/api/character/622",
        "https://rickandmortyapi.com/api/character/623",
        "https://rickandmortyapi.com/api/character/624",
        "https://rickandmortyapi.com/api/character/625",
        "https://rickandmortyapi.com/api/character/626",
        "https://rickandmortyapi.com/api/character/627",
        "https://rickandmortyapi.com/api/character/628",
        "https://rickandmortyapi.com/api/character/629",
        "https://rickandmortyapi.com/api/character/630",
        "https://rickandmortyapi.com/api/character/631",
        "https://rickandmortyapi.com/api/character/632",
        "https://rickandmortyapi.com/api/character/633",
        "https://rickandmortyapi.com/api/character/634",
        "https://rickandmortyapi.com/api/character/635",
        "https://rickandmortyapi.com/api/character/636",
        "https://rickandmortyapi.com/api/character/637",
        "https://rickandmortyapi.com/api/character/638",
        "https://rickandmortyapi.com/api/character/639",
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2"
      ],
      url: "https://rickandmortyapi.com/api/episode/37",
      created: "2020-08-06T05:44:21.422Z"
    },
    {
      id: 38,
      name: "Promortyus",
      air_date: "May 10, 2020",
      episode: "S04E07",
      characters: [
        "https://rickandmortyapi.com/api/character/640",
        "https://rickandmortyapi.com/api/character/641",
        "https://rickandmortyapi.com/api/character/642",
        "https://rickandmortyapi.com/api/character/643",
        "https://rickandmortyapi.com/api/character/644",
        "https://rickandmortyapi.com/api/character/645",
        "https://rickandmortyapi.com/api/character/646",
        "https://rickandmortyapi.com/api/character/647",
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/365"
      ],
      url: "https://rickandmortyapi.com/api/episode/38",
      created: "2020-08-06T05:49:40.563Z"
    },
    {
      id: 39,
      name: "The Vat of Acid Episode",
      air_date: "May 17, 2020",
      episode: "S04E08",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/240",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/648",
        "https://rickandmortyapi.com/api/character/649",
        "https://rickandmortyapi.com/api/character/650",
        "https://rickandmortyapi.com/api/character/651",
        "https://rickandmortyapi.com/api/character/652",
        "https://rickandmortyapi.com/api/character/653",
        "https://rickandmortyapi.com/api/character/654",
        "https://rickandmortyapi.com/api/character/655",
        "https://rickandmortyapi.com/api/character/656",
        "https://rickandmortyapi.com/api/character/657",
        "https://rickandmortyapi.com/api/character/658",
        "https://rickandmortyapi.com/api/character/659",
        "https://rickandmortyapi.com/api/character/660",
        "https://rickandmortyapi.com/api/character/661"
      ],
      url: "https://rickandmortyapi.com/api/episode/39",
      created: "2020-08-06T05:51:07.419Z"
    },
    {
      id: 40,
      name: "Childrick of Mort",
      air_date: "May 24, 2020",
      episode: "S04E09",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/662",
        "https://rickandmortyapi.com/api/character/663",
        "https://rickandmortyapi.com/api/character/664",
        "https://rickandmortyapi.com/api/character/665",
        "https://rickandmortyapi.com/api/character/666"
      ],
      url: "https://rickandmortyapi.com/api/episode/40",
      created: "2020-08-06T05:51:25.458Z"
    },
    {
      id: 41,
      name: "Star Mort: Rickturn of the Jerri",
      air_date: "May 31, 2020",
      episode: "S04E10",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/107",
        "https://rickandmortyapi.com/api/character/344",
        "https://rickandmortyapi.com/api/character/592",
        "https://rickandmortyapi.com/api/character/667",
        "https://rickandmortyapi.com/api/character/668",
        "https://rickandmortyapi.com/api/character/669",
        "https://rickandmortyapi.com/api/character/670",
        "https://rickandmortyapi.com/api/character/671"
      ],
      url: "https://rickandmortyapi.com/api/episode/41",
      created: "2020-08-06T05:51:52.079Z"
    },
    {
      id: 42,
      name: "Mort Dinner Rick Andre",
      air_date: "June 20, 2021",
      episode: "S05E01",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/180",
        "https://rickandmortyapi.com/api/character/672",
        "https://rickandmortyapi.com/api/character/673",
        "https://rickandmortyapi.com/api/character/674",
        "https://rickandmortyapi.com/api/character/675",
        "https://rickandmortyapi.com/api/character/676",
        "https://rickandmortyapi.com/api/character/677",
        "https://rickandmortyapi.com/api/character/678",
        "https://rickandmortyapi.com/api/character/679",
        "https://rickandmortyapi.com/api/character/680",
        "https://rickandmortyapi.com/api/character/681",
        "https://rickandmortyapi.com/api/character/682",
        "https://rickandmortyapi.com/api/character/683",
        "https://rickandmortyapi.com/api/character/684",
        "https://rickandmortyapi.com/api/character/685",
        "https://rickandmortyapi.com/api/character/686"
      ],
      url: "https://rickandmortyapi.com/api/episode/42",
      created: "2021-10-15T17:00:24.099Z"
    },
    {
      id: 43,
      name: "Mortyplicity",
      air_date: "June 27, 2021",
      episode: "S05E02",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/687",
        "https://rickandmortyapi.com/api/character/688",
        "https://rickandmortyapi.com/api/character/689",
        "https://rickandmortyapi.com/api/character/690",
        "https://rickandmortyapi.com/api/character/691",
        "https://rickandmortyapi.com/api/character/692",
        "https://rickandmortyapi.com/api/character/693",
        "https://rickandmortyapi.com/api/character/694",
        "https://rickandmortyapi.com/api/character/695",
        "https://rickandmortyapi.com/api/character/696",
        "https://rickandmortyapi.com/api/character/697",
        "https://rickandmortyapi.com/api/character/698",
        "https://rickandmortyapi.com/api/character/699",
        "https://rickandmortyapi.com/api/character/700",
        "https://rickandmortyapi.com/api/character/701",
        "https://rickandmortyapi.com/api/character/702",
        "https://rickandmortyapi.com/api/character/703",
        "https://rickandmortyapi.com/api/character/704",
        "https://rickandmortyapi.com/api/character/705",
        "https://rickandmortyapi.com/api/character/706",
        "https://rickandmortyapi.com/api/character/707",
        "https://rickandmortyapi.com/api/character/708",
        "https://rickandmortyapi.com/api/character/709",
        "https://rickandmortyapi.com/api/character/710",
        "https://rickandmortyapi.com/api/character/711",
        "https://rickandmortyapi.com/api/character/347",
        "https://rickandmortyapi.com/api/character/667",
        "https://rickandmortyapi.com/api/character/712",
        "https://rickandmortyapi.com/api/character/713",
        "https://rickandmortyapi.com/api/character/714",
        "https://rickandmortyapi.com/api/character/715",
        "https://rickandmortyapi.com/api/character/716"
      ],
      url: "https://rickandmortyapi.com/api/episode/43",
      created: "2021-10-15T17:00:24.102Z"
    },
    {
      id: 44,
      name: "A Rickconvenient Mort",
      air_date: "July 4, 2021",
      episode: "S05E03",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/717",
        "https://rickandmortyapi.com/api/character/718",
        "https://rickandmortyapi.com/api/character/719",
        "https://rickandmortyapi.com/api/character/720",
        "https://rickandmortyapi.com/api/character/721",
        "https://rickandmortyapi.com/api/character/722",
        "https://rickandmortyapi.com/api/character/723",
        "https://rickandmortyapi.com/api/character/724",
        "https://rickandmortyapi.com/api/character/725",
        "https://rickandmortyapi.com/api/character/797",
        "https://rickandmortyapi.com/api/character/798",
        "https://rickandmortyapi.com/api/character/799"
      ],
      url: "https://rickandmortyapi.com/api/episode/44",
      created: "2021-10-15T17:00:24.102Z"
    },
    {
      id: 45,
      name: "Rickdependence Spray",
      air_date: "July 11, 2021",
      episode: "S05E04",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/347",
        "https://rickandmortyapi.com/api/character/726",
        "https://rickandmortyapi.com/api/character/727",
        "https://rickandmortyapi.com/api/character/728",
        "https://rickandmortyapi.com/api/character/729",
        "https://rickandmortyapi.com/api/character/730",
        "https://rickandmortyapi.com/api/character/731",
        "https://rickandmortyapi.com/api/character/732",
        "https://rickandmortyapi.com/api/character/733",
        "https://rickandmortyapi.com/api/character/734",
        "https://rickandmortyapi.com/api/character/735",
        "https://rickandmortyapi.com/api/character/736",
        "https://rickandmortyapi.com/api/character/737",
        "https://rickandmortyapi.com/api/character/738",
        "https://rickandmortyapi.com/api/character/739",
        "https://rickandmortyapi.com/api/character/740",
        "https://rickandmortyapi.com/api/character/741",
        "https://rickandmortyapi.com/api/character/757"
      ],
      url: "https://rickandmortyapi.com/api/episode/45",
      created: "2021-10-15T17:00:24.103Z"
    },
    {
      id: 46,
      name: "Amortycan Grickfitti",
      air_date: "July 18, 2021",
      episode: "S05E05",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/742",
        "https://rickandmortyapi.com/api/character/743",
        "https://rickandmortyapi.com/api/character/744",
        "https://rickandmortyapi.com/api/character/745",
        "https://rickandmortyapi.com/api/character/746",
        "https://rickandmortyapi.com/api/character/747",
        "https://rickandmortyapi.com/api/character/748",
        "https://rickandmortyapi.com/api/character/749",
        "https://rickandmortyapi.com/api/character/750",
        "https://rickandmortyapi.com/api/character/751",
        "https://rickandmortyapi.com/api/character/752",
        "https://rickandmortyapi.com/api/character/58",
        "https://rickandmortyapi.com/api/character/365"
      ],
      url: "https://rickandmortyapi.com/api/episode/46",
      created: "2021-10-15T17:00:24.103Z"
    },
    {
      id: 47,
      name: "Rick & Morty's Thanksploitation Spectacular",
      air_date: "July 25, 2021",
      episode: "S05E06",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/347",
        "https://rickandmortyapi.com/api/character/753",
        "https://rickandmortyapi.com/api/character/754",
        "https://rickandmortyapi.com/api/character/756",
        "https://rickandmortyapi.com/api/character/755",
        "https://rickandmortyapi.com/api/character/757",
        "https://rickandmortyapi.com/api/character/758",
        "https://rickandmortyapi.com/api/character/759",
        "https://rickandmortyapi.com/api/character/760",
        "https://rickandmortyapi.com/api/character/761",
        "https://rickandmortyapi.com/api/character/762",
        "https://rickandmortyapi.com/api/character/763",
        "https://rickandmortyapi.com/api/character/764",
        "https://rickandmortyapi.com/api/character/765",
        "https://rickandmortyapi.com/api/character/766",
        "https://rickandmortyapi.com/api/character/767",
        "https://rickandmortyapi.com/api/character/768",
        "https://rickandmortyapi.com/api/character/800"
      ],
      url: "https://rickandmortyapi.com/api/episode/47",
      created: "2021-10-15T17:00:24.104Z"
    },
    {
      id: 48,
      name: "Gotron Jerrysis Rickvangelion",
      air_date: "August 1, 2021",
      episode: "S05E07",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/731",
        "https://rickandmortyapi.com/api/character/769",
        "https://rickandmortyapi.com/api/character/770",
        "https://rickandmortyapi.com/api/character/771",
        "https://rickandmortyapi.com/api/character/772",
        "https://rickandmortyapi.com/api/character/773",
        "https://rickandmortyapi.com/api/character/774",
        "https://rickandmortyapi.com/api/character/775",
        "https://rickandmortyapi.com/api/character/776",
        "https://rickandmortyapi.com/api/character/777",
        "https://rickandmortyapi.com/api/character/778",
        "https://rickandmortyapi.com/api/character/203",
        "https://rickandmortyapi.com/api/character/794",
        "https://rickandmortyapi.com/api/character/795",
        "https://rickandmortyapi.com/api/character/796",
        "https://rickandmortyapi.com/api/character/821"
      ],
      url: "https://rickandmortyapi.com/api/episode/48",
      created: "2021-10-15T17:00:24.104Z"
    },
    {
      id: 49,
      name: "Rickternal Friendshine of the Spotless Mort",
      air_date: "August 8, 2021",
      episode: "S05E08",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/47",
        "https://rickandmortyapi.com/api/character/592",
        "https://rickandmortyapi.com/api/character/779",
        "https://rickandmortyapi.com/api/character/780",
        "https://rickandmortyapi.com/api/character/137",
        "https://rickandmortyapi.com/api/character/781",
        "https://rickandmortyapi.com/api/character/782",
        "https://rickandmortyapi.com/api/character/783",
        "https://rickandmortyapi.com/api/character/784",
        "https://rickandmortyapi.com/api/character/785",
        "https://rickandmortyapi.com/api/character/786"
      ],
      url: "https://rickandmortyapi.com/api/episode/49",
      created: "2021-10-15T17:00:24.104Z"
    },
    {
      id: 50,
      name: "Forgetting Sarick Mortshall",
      air_date: "September 5, 2021",
      episode: "S05E09",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/787",
        "https://rickandmortyapi.com/api/character/788",
        "https://rickandmortyapi.com/api/character/789",
        "https://rickandmortyapi.com/api/character/790",
        "https://rickandmortyapi.com/api/character/791",
        "https://rickandmortyapi.com/api/character/792",
        "https://rickandmortyapi.com/api/character/793"
      ],
      url: "https://rickandmortyapi.com/api/episode/50",
      created: "2021-10-15T17:00:24.105Z"
    },
    {
      id: 51,
      name: "Rickmurai Jack",
      air_date: "September 5, 2021",
      episode: "S05E10",
      characters: [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/5",
        "https://rickandmortyapi.com/api/character/4",
        "https://rickandmortyapi.com/api/character/3",
        "https://rickandmortyapi.com/api/character/47",
        "https://rickandmortyapi.com/api/character/787",
        "https://rickandmortyapi.com/api/character/118",
        "https://rickandmortyapi.com/api/character/801",
        "https://rickandmortyapi.com/api/character/802",
        "https://rickandmortyapi.com/api/character/803",
        "https://rickandmortyapi.com/api/character/804",
        "https://rickandmortyapi.com/api/character/805",
        "https://rickandmortyapi.com/api/character/806",
        "https://rickandmortyapi.com/api/character/94",
        "https://rickandmortyapi.com/api/character/807",
        "https://rickandmortyapi.com/api/character/808",
        "https://rickandmortyapi.com/api/character/809",
        "https://rickandmortyapi.com/api/character/810",
        "https://rickandmortyapi.com/api/character/244",
        "https://rickandmortyapi.com/api/character/285",
        "https://rickandmortyapi.com/api/character/274",
        "https://rickandmortyapi.com/api/character/215",
        "https://rickandmortyapi.com/api/character/294",
        "https://rickandmortyapi.com/api/character/389",
        "https://rickandmortyapi.com/api/character/380",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/811",
        "https://rickandmortyapi.com/api/character/812",
        "https://rickandmortyapi.com/api/character/392",
        "https://rickandmortyapi.com/api/character/813",
        "https://rickandmortyapi.com/api/character/814",
        "https://rickandmortyapi.com/api/character/815",
        "https://rickandmortyapi.com/api/character/816",
        "https://rickandmortyapi.com/api/character/817",
        "https://rickandmortyapi.com/api/character/818",
        "https://rickandmortyapi.com/api/character/819",
        "https://rickandmortyapi.com/api/character/820",
        "https://rickandmortyapi.com/api/character/822",
        "https://rickandmortyapi.com/api/character/823",
        "https://rickandmortyapi.com/api/character/824",
        "https://rickandmortyapi.com/api/character/825"
      ],
      url: "https://rickandmortyapi.com/api/episode/51",
      created: "2021-10-15T17:00:24.105Z"
    }
  ];
  return {
    composable: vi.fn().mockReturnValue({
      data: mockedEpisodes
    }),
    mockedEpisodes
  };
});

vi.mock('@/composables/reactiveFetchData', () => ({
  useReactiveFetch: mock.composable,
}));

describe('CharacterDetails', () => {

  const characterObject = filteredCharacters.results[0];
  const props = {
    character: characterObject
  };
  const wrapper = mount(CharacterDetails, {
    props,
    global: {
      stubs: {
        teleport: true
      }
    }
  });

  it('renders properly', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toContain(characterObject.name);
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('render with right properties', () => {
    expect(wrapper.props()).toEqual(props);
  });

  describe('CharacterDetails Elements', () => {

    it('render with properly style', () => {
      const wrapperCssProps = {
        padding: '8px',
        'border-radius': '8px',
        'background-color': 'rgb(255, 255, 255)',
        'margin-bottom': '1.2em',
        transition: 'background-color .5s ease',
        position: 'fixed',
        'z-index': '999',
        top: '2%',
        left: '50%',
        width: '800px',
        'margin-left': '-400px',
        height: '95%',
        'overflow-y': 'scroll'
      };
      type Keys = keyof typeof wrapperCssProps;

      const modalElem = wrapper.find('#character-modal');
      const computedStyle = getComputedStyle(modalElem.element);

      expect(modalElem.classes()).toContain('modal');

      Object.keys(wrapperCssProps).forEach((key: string) => {
        expect(computedStyle[key as keyof CSSStyleDeclaration])
          .toBe(wrapperCssProps[key as Keys]);
      });
    });

    it('render with properly content style', () => {
      const contentElem = wrapper.find('#modal-content');
      const contentCssProps = {
        flex: '5 1 0%',
        position: 'relative',
        display: 'flex',
        'flex-direction': 'column',
        color: 'rgb(0, 0, 0)',
        'font-size': '10px'
      };
      type Keys = keyof typeof contentCssProps;

      const computedStyle = getComputedStyle(contentElem.element);

      expect(contentElem.classes()).toContain('modal__content');

      Object.keys(contentCssProps).forEach((key: string) => {
        expect(computedStyle[key as keyof CSSStyleDeclaration])
          .toBe(contentCssProps[key as Keys]);
      });
    });

    describe('Modal Content Section', () => {

      const sections = wrapper.findAll('[data-test="content-section"]');
      expect(sections).toHaveLength(5);

      const contentCssProps = {
        display: 'flex',
        'flex-direction': 'column',
        'flex-wrap': 'wrap',
        'align-content': 'stretch',
        'justify-content': 'space-between'
      };

      it('modal content section style properly', () => {
        const contentElem = sections[1];
        const computedStyle = getComputedStyle(contentElem.element);
        type Keys = keyof typeof contentCssProps;

        expect(contentElem.classes()).toContain('modal__content-section');

        Object.keys(contentCssProps).forEach((key: string) => {
          expect(computedStyle[key as keyof CSSStyleDeclaration])
            .toBe(contentCssProps[key as Keys]);
        });
      });

      describe('Separator Section', () => {

        const separators = wrapper.findAll('.modal__content-separator');
        expect(separators).toHaveLength(2);

        it('separators style properly', () => {
          const separatorCssProps = {
            color: 'rgb(224, 224, 224)',
            'margin-top': '20px'
          }
          type Keys = keyof typeof separatorCssProps;

          separators.forEach(separator => {
            const computedStyle = getComputedStyle(separator.element);

            Object.keys(separatorCssProps).forEach((key: string) => {
              expect(computedStyle[key as keyof CSSStyleDeclaration])
                .toBe(separatorCssProps[key as Keys]);
            });
          });
        });
      });

      describe('Header Section', () => {

        const contentElem = sections[0];

        it('header style properly', () => {
          const headerCssProps = {
            ...contentCssProps,
            flex: '1 1 0%',
            'justify-content': 'center',
            'padding': '0.5rem',
            'align-items': 'center',
            'background-color': 'rgb(204, 204, 204)'
          }

          const computedStyle = getComputedStyle(contentElem.element);
          type Keys = keyof typeof headerCssProps;

          expect(contentElem.classes()).toContain('modal__content-section');
          expect(contentElem.classes()).toContain('modal__content-section--header');

          Object.keys(headerCssProps).forEach((key: string) => {
            expect(computedStyle[key as keyof CSSStyleDeclaration])
              .toBe(headerCssProps[key as Keys]);
          });
        });
      });

      describe('Information Section', () => {

        const contentElem = sections[1];

        const cardInfos: DOMWrapper<Element>[] = contentElem.findAllComponents({ name: 'CardInfo' });
        expect(cardInfos).toHaveLength(3);

        it('cards info style properly', () => {
          const cardInfoCssProps = {
            flex: '0 1 auto',
            'align-self': 'auto'
          }

          type Keys = keyof typeof cardInfoCssProps;

          cardInfos.forEach(card => {
            expect(card.classes()).toContain('modal__content-section--row-items');
            const computedStyle = getComputedStyle(card.element);

            Object.keys(cardInfoCssProps).forEach((key: string) => {
              expect(computedStyle[key as keyof CSSStyleDeclaration])
                .toBe(cardInfoCssProps[key as Keys]);
            });
          });
        });

        it('cards info gender render properly', () => {
          const cardInfo = cardInfos[0];

          expect(cardInfo.text()).toContain('Gender:');
          expect(cardInfo.text()).toContain(characterObject.gender);
        });

        it('cards info origin render properly', () => {
          const cardInfo = cardInfos[1];

          expect(cardInfo.text()).toContain('Origin:');
          expect(cardInfo.text()).toContain(characterObject.origin.name);
        });

        it('cards info type render properly', () => {
          const cardInfo = cardInfos[2];

          expect(cardInfo.text()).toContain('Type:');
          expect(cardInfo.text()).toContain(characterObject.type);
        });
      });

      describe('Episodes Section', () => {

        const contentElem = sections[2];

        const cardInfos: DOMWrapper<Element>[] = contentElem.findAllComponents({ name: 'CardInfo' });
        expect(cardInfos).toHaveLength(characterObject.episode.length);

        it('cards info style properly', () => {
          const cardInfoCssProps = {
            flex: '0 1 auto',
            'align-self': 'auto'
          }

          type Keys = keyof typeof cardInfoCssProps;

          cardInfos.forEach(card => {
            expect(card.classes()).toContain('modal__content-section--row-items');
            const computedStyle = getComputedStyle(card.element);

            Object.keys(cardInfoCssProps).forEach((key: string) => {
              expect(computedStyle[key as keyof CSSStyleDeclaration])
                .toBe(cardInfoCssProps[key as Keys]);
            });
          });
        });

        it('cards info episode render properly', () => {
          for (let index = 0; index < cardInfos.length; index++) {
            expect(cardInfos[index].text()).toContain(mock.mockedEpisodes[index].name);
            expect(cardInfos[index].text()).toContain(mock.mockedEpisodes[index].episode);
            expect(cardInfos[index].text()).toContain(mock.mockedEpisodes[index].air_date);
          }
        });
      });

      describe('Interesting Characters Section', () => {

        const contentElem = sections[3];

        it('render properly', () => {
          const cardInfos = contentElem.findAllComponents({ name: 'CharacterCard' });
          expect(cardInfos).toHaveLength(2);
        });
      });

      describe('Share Character Section', () => {

        const contentElem = sections[4];
        
        it('render properly', () => {
          const shareCharacterButton = contentElem.find('button');

          const buttonCssProps = {
            margin: '20px',
            padding: '10px 20px',
            'background-color': 'rgb(17, 85, 95)',
            color: 'rgb(255, 255, 255)',
            'font-size': '18px',
            'font-weight': '700',
            border: '',
            'border-radius': '20px',
            cursor: 'pointer'
          }
          type Keys = keyof typeof buttonCssProps;

          const computedStyle = getComputedStyle(shareCharacterButton.element);

          expect(shareCharacterButton.classes()).toContain('modal__content-share-button');

          Object.keys(buttonCssProps).forEach((key: string) => {
            expect(computedStyle[key as keyof CSSStyleDeclaration])
              .toBe(buttonCssProps[key as Keys]);
          });
        });
      });
    });
  });
});