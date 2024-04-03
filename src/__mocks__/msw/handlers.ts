import { http } from 'msw';

export const handlers = [
  http.get('/test', ({ request, params, cookies }) => {
    console.log({ request, params, cookies });
    return new Response(null, { status: 200 });
  }),
];
