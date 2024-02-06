import type { IEpisode } from "./types";

export const getEpisodeName = async (url: string) => {
    let name = "";

    try {
        const res = await fetch(url);
        const episode = await res.json() as IEpisode;
        name = episode.name;
    } catch (err) {
        // error.value = err
    }

    return name;
};