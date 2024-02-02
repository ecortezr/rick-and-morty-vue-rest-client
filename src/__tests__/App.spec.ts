import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import type { ICharacter } from '@/types';
import mockCharacter from '@/components/__tests__/mockCharacter.json';
import mockEpisode from '@/components/__tests__/mockEpisode.json';

const characterObject = JSON.parse(JSON.stringify(mockCharacter)) as ICharacter;

const mock = vi.hoisted(() => {
  return {
    composable: vi.fn().mockReturnValue({
      data: {
        name: "Close Rick-counters of the Rick Kind"
      }
    }),
  };
});

vi.mock('@/composables/reactiveFetchData', () => ({
  useReactiveFetch: mock.composable,
}));

describe('CharacterCard', () => {

    const wrapper = mount(App);
  
    it('renders properly', () => {
      expect(wrapper).toBeTruthy();
      expect(wrapper.text()).toContain('Filtro por nombre:');
      expect(wrapper.text()).toMatchSnapshot();
    });
});  