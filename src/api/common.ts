import 'whatwg-fetch';

const DEFAULT_API_TIMEOUT = 7000;
export const apiGET = ({
  url,
  method = 'GET',
  feature,
  body,
  timeout = DEFAULT_API_TIMEOUT
}: {
  body:
    | string
    | Blob
    | ArrayBufferView
    | ArrayBuffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null
    | undefined;
  feature: string;
  method: string;
  timeout: number;
  url: string;
}): Promise<Response> =>
  Promise.race([
    window.fetch(url, { body, method }),
    // eslint-disable-next-line promise/param-names
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(feature + ': timeout')), timeout)
    )
  ]) as Promise<Response>;
