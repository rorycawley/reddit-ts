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
export const apiGET = (url: string): Promise<Response> => window.fetch(url);
