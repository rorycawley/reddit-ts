/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'whatwg-fetch';

// export const getData = <T>(req: RequestInfo): Promise<T> =>
//   fetch(req).then(res => res.json());

// example consuming code
// const data = await getData(
//   "https://jsonplaceholder.typicode.com/todos"
// );
// export async function apiGET(request: RequestInfo): Promise<any> {
//   const response = await fetch(request);
//   const body = await response.json();
//   return body;
// }

// TODO redo
const DEFAULT_API_TIMEOUT = 7000;
export const apiGET = ({
  url,
  body,
  method,
  feature,
  timeout = DEFAULT_API_TIMEOUT
}: {
  body: any;
  feature: string;
  method: string;
  timeout: number;
  url: string;
}): Promise<Response> =>
  Promise.race([
    window.fetch(url, { body, method }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), timeout)
    )
  ]) as Promise<Response>;

// (url, options, timeout = 7000) {
//  Promise.race([
//     window.fetch(url, { body, method }),
//     new Promise((_, reject) =>
//         setTimeout(() => reject(new Error('timeout')), timeout)
//     )
// ]);
