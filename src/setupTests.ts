import { beforeAll, afterEach, afterAll } from "vitest";
import { http, HttpResponse, HttpHandler } from "msw";
import { setupServer } from "msw/node";
import episodeResponse from "./components/__tests__/mockEpisode.json";
import characterResponse from "./components/__tests__/mockCharacter.json";
import charactersResponse from "./__tests__/mockCharactersPage.json";
import "whatwg-fetch";

import { createApp, type App, type Ref } from 'vue'

type ComposableUseFetchReturn<T> = undefined | {
  data: Ref<T | undefined>;
  error: Ref<null>;
};

export function withSetup<T>(composable: Function): [ComposableUseFetchReturn<T>, App<Element>] {
  let result: ComposableUseFetchReturn<T>;
  
  const app = createApp({
    setup() {
      result = composable();

      return () => {}
    }
  })
  app.mount(document.createElement('div'))

  return [result, app]
}

export const API_URLS = {
  charactersUrl: 'https://rickandmortyapi.com/api/character',
  characterUrl: 'https://rickandmortyapi.com/api/character/232',
  episodeUrl: 'https://rickandmortyapi.com/api/episode/10'
};

export const restHandlers = [
  http.get(API_URLS.charactersUrl, () => {
    return HttpResponse.json(charactersResponse);
  }),
  http.get(API_URLS.characterUrl, () => {
    return HttpResponse.json(characterResponse);
  }),
  http.get(API_URLS.episodeUrl, () => {
    return HttpResponse.json(episodeResponse);
  })
];
const server = setupServer(...restHandlers);
server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);

});
server.events.on('response:mocked', ({ request, requestId, response }) => {
  console.log(
    'MSW response intercepted: %s %s received %s %s',
    request.method,
    request.url,
    response.status,
    response.statusText
  );
});

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
