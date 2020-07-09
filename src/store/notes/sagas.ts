// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import {
//   all,
//   call,
//   fork,
//   put,
//   takeEvery,
//   takeLatest
// } from 'redux-saga/effects';
// import { LOAD_NOTES, setNotes, SAVE_NOTES } from './notesDucks';
// import { getNotes, postNotes } from './api';

// const NOTES_API_ENDPOINT = 'http://localhost:9000';

// function* handleFetch() {
//   try {
//     // To call async functions, use redux-saga's `call()`.
//     const res = yield call(callApi, 'get', NOTES_API_ENDPOINT, '/notes');

//     if (res.error) {
//       yield put(fetchError(res.error));
//     } else {
//       yield put(fetchSuccess(res));
//     }
//   } catch (err) {
//     if (err instanceof Error) {
//       yield put(fetchError(err.stack!));
//     } else {
//       yield put(fetchError('An unknown error occured.'));
//     }
//   }
// }

// // This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// // type, and run our saga, for example the `handleFetch()` saga above.
// // function* watchFetchRequest() {
// //   yield takeEvery(HeroesActionTypes.FETCH_REQUEST, handleFetch)
// // }

// export function* loadNotesWatcher() {
//   yield takeLatest(LOAD_NOTES, loadNotesFlow);
// }

// function* saveNotesWatcher() {
//   yield takeLatest(SAVE_NOTES, saveNotesFlow);
// }

// export function* rootSaga() {
//   yield fork(loadNotesWatcher);
//   yield fork(saveNotesWatcher);
// }


// // // load
// function* loadNotesFlow() {
//   console.log('++++');
//   const notes = yield call(getNotes);
//   console.log(' ----', notes);
//   yield put(setNotes(notes));
// }

// // // save
// function* saveNotesFlow(action: action) {
//   yield call(postNotes, action.payload);
// }
