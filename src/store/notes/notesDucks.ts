// actions
export const ADD_NOTE = 'notes/ADD_NOTE';
export const SET_NOTES = 'notes/SET_NOTES';
export const LOAD_NOTES = 'notes/LOAD_NOTES';
export const SAVE_NOTES = 'notes/SAVE_NOTES';

type action = {
  type: string;
  payload?: string | string[] | undefined;
};

type note = string;

export const addNote = (note: note): action => ({
  type: ADD_NOTE,
  payload: note
});

export const setNotes = (notes: note[]): action => ({
  type: SET_NOTES,
  payload: notes
});

export const saveNotes = (notes: note[]): action => ({
  type: SAVE_NOTES,
  payload: notes
});

export const loadNotes = (): action => ({
  type: LOAD_NOTES
});

type state = {
  notes: note[];
};

// reducer
const initialState: state = {
  notes: [] as note[]
};

export const notesReducer = (state = initialState, action: action): state => {
  switch (action.type) {
    case ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] } as state;
    }
    case SET_NOTES: {
      return { ...state, notes: action.payload } as state;
    }
    default:
      return state;
  }
};

export default notesReducer;
