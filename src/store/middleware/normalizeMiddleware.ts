/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Dispatch } from 'redux';

import {
  SET_SUBREDDITS,
  SetSubredditsAction,
  setSubreddits
} from '../subreddits';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const NORMALIZING_DATA = 'NORMALIZING_DATA';
export const normalizingData = (feature: string, data: any) => ({
  type: `${feature} ${NORMALIZING_DATA}`,
  meta: { feature, data }
});
const DATA_NORMALIZED = 'DATA_NORMALIZED';
export const dataNormalized = (feature: string, data: any) => ({
  type: `${feature} ${DATA_NORMALIZED}`,
  meta: { feature, data }
});

const normalizeMiddleware = ({ dispatch }: { dispatch: Dispatch }) => (
  next: (action: { type: string }) => void
) => (action: {
  type: string;
  meta: { normalizeKey: string; feature: string };
}) => {
  if (action.type === SET_SUBREDDITS && action.meta.normalizeKey) {
    // dubug message to say we're normalizing this data
    dispatch(
      normalizingData(
        action.meta.feature,
        (action as SetSubredditsAction).payload.subreddits
      )
    );

    // transform the data structure
    // alert(JSON.stringify(action.payload));
    const subreddits: string[] = (action as SetSubredditsAction).payload.subreddits.map(
      (item: { [x: string]: any }) => item[action.meta.normalizeKey]
    );
    dispatch(dataNormalized(action.meta.feature, subreddits));

    // sends the data along with the new normalized data
    // console.log(setSubreddits(subreddits, null));
    next(setSubreddits(subreddits, null));
  } else {
    // sends it to the next middleware or to the rootReducer if there are no more middlewares
    next(action);
  }
};
export default normalizeMiddleware;
