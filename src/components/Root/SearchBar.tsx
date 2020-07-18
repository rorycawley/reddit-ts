/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useState, ChangeEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { fetchSubreddits } from '../../store/subreddits';

import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteChangeDetails
} from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
  changeSelectedSubreddit,
  useSelectedSubreddit
} from './useSelectedSubreddit';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)'
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

const SearchBar: FC = () => {
  // const classes = useStyles();
  const { dispatch } = useSelectedSubreddit();
  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState<string | null>('');
  const [inputValue, setInputValue] = useState('');

  // redux
  const dispatchRedux = useDispatch();
  const subredditsSelector = (state: RootState) => state.subreddits.subreddits;
  const dropdownSubreddits = useSelector(subredditsSelector);

  const selectNewSubreddit: (
    event: ChangeEvent<{}>,
    value: unknown,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<unknown> | undefined
  ) => void = (_event, newSelectedSubreddit) => {
    if (newSelectedSubreddit !== null) {
      // console.log('newSelectedSubreddit', Event, newSelectedSubreddit);
      setSearchQuery(newSelectedSubreddit as string);
      dispatch(changeSelectedSubreddit(newSelectedSubreddit as string));
    }
  };

  const changeSubredditSearchQuery = (
    _: ChangeEvent<{}>,
    newSubredditQuery: string
  ) => {
    setInputValue(newSubredditQuery);
    if (newSubredditQuery) {
      // console.log('changeSubredditSearchQuery', event, newSubredditQuery);
      dispatchRedux(fetchSubreddits(newSubredditQuery));
    }
  };

  // TODO fix this with REDUX
  const isLoading = false;
  // const dropdownSubreddits: string[] = ['one', 'two', 'three']; // getSubredditNames(subreddits);
  const loading = (open && dropdownSubreddits.length === 0) || isLoading;

  return (
    <div>
      <div>{`value: ${
        searchQuery !== null ? `'${searchQuery}'` : 'null'
      }`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        clearOnBlur
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        value={searchQuery}
        onChange={selectNewSubreddit}
        inputValue={inputValue}
        onInputChange={changeSubredditSearchQuery}
        id='controllable-states-demo'
        options={dropdownSubreddits}
        style={{ width: 300 }}
        loading={loading}
        renderInput={params => (
          <TextField
            {...params}
            label='Search for subreddits...'
            fullWidth
            variant='outlined'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />
    </div>
  );
};
export default SearchBar;
