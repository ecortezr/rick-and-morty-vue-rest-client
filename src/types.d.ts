export type PageInfo = {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export type Page<T> = {
    info: PageInfo;
    results: T[];
}

export type Location = {
    name: string;
    url: string;
}

export interface ICharacterBase {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    image: string;
    url: string;
    created: Date;
    episode: string[];
}

export interface ICharacterApi extends ICharacterBase {
    location: Location;
}

export interface ICharacter extends ICharacterBase {
    locationName: string;
    isFavorite: boolean;
    firstEpisodeName?: string;
}

export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
}
