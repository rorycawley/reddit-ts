/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.log('error loading persisted redux state: ', error);
    return undefined;
  }
};

export const saveState = (state: unknown) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log('error saving persisted redux state: ', error);
  }
};
