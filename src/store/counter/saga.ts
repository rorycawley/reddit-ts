/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { put } from 'redux-saga/effects';
import { DECREMENT } from './types';

export function* addCustomer() {
  yield put({ type: DECREMENT });
}
