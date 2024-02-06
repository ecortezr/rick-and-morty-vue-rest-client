import { describe, it, expect } from 'vitest'
import { flushPromises } from '@vue/test-utils';
import { API_URLS, withSetup } from '@/setupTests.js';
import { useReactiveFetch } from '../reactiveFetchData'
import type { Page, ICharacter, IEpisode } from '@/types.js';
import mockCharacters from "@/__tests__/mockCharactersPage.json";
import mockFilteredCharacters from "@/__tests__/mockCharactersFilteredPage.json";
import mockEpisode from "@/components/__tests__/mockEpisode.json";
import mockEpisodes from "@/components/__tests__/mockEpisodes.json";

describe('useReactiveFetch', () => {

    it('return characters data properly', async () => {
        const [result, app] = withSetup<Page<ICharacter>>(() => useReactiveFetch<Page<ICharacter>>(API_URLS.charactersUrl));
        
        await flushPromises();
        
        expect(result?.data.value).toEqual(mockCharacters);
        
        app.unmount();
    });
    
    it('return filtered characters data properly', async () => {
        const [result, app] = withSetup<Page<ICharacter>>(() => useReactiveFetch<Page<ICharacter>>(API_URLS.charactersWithFilterUrl));
        
        await flushPromises();

        expect(result?.data.value).toEqual(mockFilteredCharacters);
        
        app.unmount();
    });
    
    it('return first episode data for a character properly', async () => {
        const [result, app] = withSetup<IEpisode>(() => useReactiveFetch<IEpisode>(API_URLS.episodeUrl));
        
        await flushPromises();
        
        expect(result?.data.value).toEqual(mockEpisode);
        
        app.unmount();
    });
    
    it('return episodes data for a character properly', async () => {
        const [result, app] = withSetup<IEpisode[]>(() => useReactiveFetch<IEpisode[]>(API_URLS.episodesUrl));
        
        await flushPromises();
        
        expect(result?.data.value).toEqual(mockEpisodes);
        
        app.unmount();
    });
});