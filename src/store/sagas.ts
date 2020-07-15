/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { apiGET } from 'src/api/common';
import { call } from 'redux-saga/effects';
import { querySubredditsURL } from 'src/api/reddit';

function* querySubredditsSagaWorker(subredditQuery: string) {
  try {
    const result = yield call(apiGET, querySubredditsURL(subredditQuery));
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
export default querySubredditsSagaWorker;
