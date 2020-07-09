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

    it('should handle ADD_NOTE', () => {
      expect(
        notesDucks.notesReducer(
          { notes: ['note 1'] },
          {
            type: notesDucks.ADD_NOTE,
            payload: 'Run the tests'
          }
        )
      ).toEqual({
        notes: ['note 1', 'Run the tests']
      });
    });

    it('should handle SET_NOTES', () => {
      expect(
        notesDucks.notesReducer(
          { notes: ['note 1'] },
          {
            type: notesDucks.SET_NOTES,
            payload: ['one', 'two', 'three']
          }
        )
      ).toEqual({
        notes: ['one', 'two', 'three']
      });
    });

    it('should handle SAVE_NOTES', () => {
      expect(
        notesDucks.notesReducer(
          { notes: ['note 1'] },
          {
            type: notesDucks.SAVE_NOTES,
            payload: ['one', 'two', 'three']
          }
        )
      ).toEqual({
        notes: ['note 1']
      });
    });

    it('should handle LOAD_NOTES', () => {
      expect(
        notesDucks.notesReducer(
          { notes: ['note 1', 'note 2'] },
          {
            type: notesDucks.LOAD_NOTES
          }
        )
      ).toEqual({
        notes: ['note 1', 'note 2']
      });
    });
  });
});

// export const loadNotes = (): action => ({
//   type: LOAD_NOTES
// });
