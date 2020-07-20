/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useState, ChangeEvent, useRef } from 'react';

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
  const inputField = useRef<HTMLInputElement>();

  // const classes = useStyles();
  const [, dispatchContext] = useSelectedSubreddit();
  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  // redux
  const dispatchRedux = useDispatch();
  const subredditsSelector = (state: RootState) => state.subreddits.subreddits;
  const dropdownSubreddits = useSelector(subredditsSelector);
  const loadingSelector = (state: RootState) => state.ui.loading;
  const loading = useSelector(loadingSelector);

  const selectNewSubreddit: (
    event: ChangeEvent<{}>,
    value: unknown,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<unknown> | undefined
  ) => void = (_event, newSelectedSubreddit) => {
    console.log('selectNewSubreddit ', event);
    if (newSelectedSubreddit !== null) {
      // console.log('newSelectedSubreddit', Event, newSelectedSubreddit);
      setSearchQuery(newSelectedSubreddit as string);
      setInputValue(newSelectedSubreddit as string);

      dispatchContext(changeSelectedSubreddit(newSelectedSubreddit as string));
    } else {
      setSearchQuery('');
      setInputValue('');
    }
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    // fires on typing, but not when option is selected
    // update our local state
    console.log('handleTextFieldChange');
    console.log(event, event.target, event.target.value);
    setInputValue(event.target.value);
    dispatchRedux(fetchSubreddits(event.target.value));
  };

  return (
    <div>
      <div>{`value: ${
        searchQuery !== null ? `'${searchQuery}'` : 'null'
      }`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        handleHomeEndKeys
        selectOnFocus
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
        // onInputChange={changeSubredditSearchQuery}
        id='controllable-states-demo'
        options={dropdownSubreddits}
        style={{ width: 300 }}
        loading={(open && dropdownSubreddits.length === 0) || loading}
        renderInput={params => (
          <TextField
            {...params}
            label='Search for subreddits...'
            inputRef={inputField}
            onChange={handleTextFieldChange}
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
