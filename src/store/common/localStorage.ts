export const loadState = (): unknown | undefined => {
  try {
    const serializedState = localStorage.getItem('state');

    return (serializedState ? JSON.parse(serializedState) : undefined) as
      | unknown
      | undefined;
  } catch (error) {
    console.log('error loading persisted redux state: ', error);
    return undefined;
  }
};

export const saveState = (state: unknown): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    console.log('error saving persisted redux state: ', error);
  }
};
