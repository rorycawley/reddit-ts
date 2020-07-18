export interface UiState {
  readonly loading: boolean;
}

export const SET_LOADER = 'SET_LOADER';
export interface SetLoaderAction {
  type: string;
  payload: UiState;
  meta: { feature: string };
}
export type UiActionTypes = SetLoaderAction;

export const setLoader = (state: UiState, feature: string): UiActionTypes => ({
  type: `${feature} ${SET_LOADER}`,
  payload: state,
  meta: { feature }
});

export const initState: UiState = {
  loading: false
};
export const uiReducer = (
  ui: UiState = initState,
  action: UiActionTypes
): UiState => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...ui, loading: action.payload.loading };
    default:
      return ui;
  }
};
