import { Dispatch, AnyAction, Middleware } from 'redux';

import {
  SET_SUBREDDITS,
  SetSubredditsAction,
  setSubreddits
} from '../subreddits';

const NORMALIZING_DATA = 'NORMALIZING_DATA';
export interface NormalizingDataAction {
  type: string;
  meta: { feature: string; data: any };
}
export const normalizingData = (
  feature: string,
  data: any
): NormalizingDataAction => ({
  type: `${feature} ${NORMALIZING_DATA}`,
  meta: { feature, data }
});

const DATA_NOW_NORMALIZED = 'DATA_NOW_NORMALIZED';
export interface DataNowNormalizedAction {
  type: string;
  meta: { feature: string; data: any[] };
}
export const dataNowNormalized = (
  feature: string,
  data: any[]
): DataNowNormalizedAction => ({
  type: `${feature} ${DATA_NOW_NORMALIZED}`,
  meta: { feature, data }
});

const normalizeMiddleware: Middleware = ({
  dispatch
}: {
  dispatch: Dispatch;
}) => (next: (action: { type: string }) => void) => (action: AnyAction) => {
  if (action.type === SET_SUBREDDITS) {
    const {
      payload: { subreddits },
      meta: { dataNormalized, feature }
    } = action as SetSubredditsAction;

    const subredditsItems = subreddits as Array<{ name: string }>;

    if (!dataNormalized) {
      // dubug message to say we're normalizing this data
      dispatch(normalizingData(feature, subredditsItems));

      // transform the data structure
      // alert(JSON.stringify(action.payload));

      const subredditNames = subredditsItems.map(item => item.name);

      dispatch(dataNowNormalized(feature, subredditNames));

      // sends the data along with the new normalized data
      console.log(setSubreddits(subredditNames, true));
      return next(setSubreddits(subredditNames, true));
    }
  }

  // sends it to the next middleware or to the rootReducer if there are no more middlewares
  next(action);
};
export default normalizeMiddleware;
