/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// import * as actions from '../../actions/TodoActions';
// import * as types from '../../constants/ActionTypes';
import * as notesDucks from 'src/store/notes';

describe('notesDucks', () => {
  describe('actions', () => {
    it('should create an addNote action', () => {
      const text = 'Finish docs';
      const expectedAction = {
        type: notesDucks.ADD_NOTE,
        payload: text
      };
      expect(notesDucks.addNote(text)).toEqual(expectedAction);
    });

    it('should create a setNotes action', () => {
      const notes = ['one', 'two', 'three'];
      const expectedAction = {
        type: notesDucks.SET_NOTES,
        payload: notes
      };
      expect(notesDucks.setNotes(notes)).toEqual(expectedAction);
    });

    it('should create a saveNotes action', () => {
      const notes = ['uno', 'dos', 'tres'];
      const expectedAction = {
        type: notesDucks.SAVE_NOTES,
        payload: notes
      };
      expect(notesDucks.saveNotes(notes)).toEqual(expectedAction);
    });

    it('should create a loadNotes action', () => {
      const expectedAction = {
        type: notesDucks.LOAD_NOTES
      };
      expect(notesDucks.loadNotes()).toEqual(expectedAction);
    });
  });

  // const initialState: state = {
  //   notes: [] as note[]
  // };
  describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(
        notesDucks.notesReducer(undefined, {
          type: notesDucks.ADD_NOTE,
          payload: 'Run the tests'
        })
      ).toEqual({
        notes: ['Run the tests']
      });
    });

    it.todo('should handle ADD_NOTE');

    it.todo('should handle SET_NOTES');

    it.todo('should handle SAVE_NOTES');

    it.todo('should handle LOAD_NOTES');
  });
});

// export const loadNotes = (): action => ({
//   type: LOAD_NOTES
// });
