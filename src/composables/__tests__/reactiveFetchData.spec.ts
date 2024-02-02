import { describe, it, expect } from 'vitest'
import { flushPromises } from '@vue/test-utils';
import { API_URLS, withSetup } from '@/setupTests.js';
import { useReactiveFetch } from '../reactiveFetchData'
import type { Page, ICharacter, IEpisode } from '@/types.js';
import mockCharacters from "@/__tests__/mockCharactersPage.json";
import mockCharacter from "@/components/__tests__/mockCharacter.json";
import mockEpisode from "@/components/__tests__/mockEpisode.json";

describe('useFetch', () => {

    it('return characters data properly', async () => {
        const [result, app] = withSetup<Page<ICharacter>>(() => useReactiveFetch<Page<ICharacter>>(API_URLS.charactersUrl));
        
        await flushPromises();
        
        expect(result?.data.value).toEqual(mockCharacters);
        
        app.unmount();
    });
    
    it('return character data properly', async () => {
        const [result, app] = withSetup<ICharacter>(() => useReactiveFetch<ICharacter>(API_URLS.characterUrl));
        
        await flushPromises();
        
        expect(result?.data.value).toEqual(mockCharacter);
        
        app.unmount();
    });
    
    it('return episode data properly', async () => {
        const [result, app] = withSetup<IEpisode>(() => useReactiveFetch<IEpisode>(API_URLS.episodeUrl));
        
        await flushPromises();
        
        expect(result?.data.value).toEqual(mockEpisode);
        
        app.unmount();
    });
});