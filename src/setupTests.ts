import { beforeAll, afterEach, afterAll } from "vitest";
import { http, HttpResponse, HttpHandler } from "msw";
import { setupServer } from "msw/node";
import episodeResponse from "./components/__tests__/mockEpisode.json";
import episodesResponse from "./components/__tests__/mockEpisodes.json";
import charactersResponse from "./__tests__/mockCharactersPage.json";
import charactersFilteredResponse from "./__tests__/mockCharactersFilteredPage.json";
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
  charactersWithFilterUrl: 'https://rickandmortyapi.com/api/character?name=Morty%20Smith',
  episodeUrl: 'https://rickandmortyapi.com/api/episode/10',
  episodesUrl: 'https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51'
};

export const restHandlers = [
  http.get(API_URLS.charactersUrl, ({ request }) => {

    const url = new URL(request.url)
 
    const name = url.searchParams.get('name');
    return (name) 
      ? HttpResponse.json(charactersFilteredResponse)
      : HttpResponse.json(charactersResponse);
  }),
  http.get(API_URLS.episodeUrl, () => {
    return HttpResponse.json(episodeResponse);
  }),
  http.get(API_URLS.episodesUrl, () => {
    return HttpResponse.json(episodesResponse);
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
