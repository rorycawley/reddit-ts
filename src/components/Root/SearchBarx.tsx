import React, { FC, useState, useEffect } from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useSubreddit } from './useSelectedSubreddit';
import useDebounce from '../../api//useDebounce';
import { useDispatch, useSelector } from 'react-redux';

import {
  querySubredditsURL,
  DEFAULT_SUBREDDIT,
  DEFAULT_SUBREDDITS_LIST
} from '../../api/reddit';
import ErrorFound from './ErrorFound';
import { fetchSubreddits } from '~store/subreddits';

const useStyles = makeStyles(() => ({
  searchBar: {
    paddingLeft: '35px',
    paddingRight: '35px',
    paddingBottom: '10px'
  }
}));

const SearchBar: FC = () => {
  const classes = useStyles();
  // const { subreddit, setSubreddit } = useSubreddit()!;
  const { state, dispatchCtx } = useSubreddit();

  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const subredditsSelector = (state: RootState) => state.subreddits.subreddits;
  const dropdownSubreddits = useSelector(subredditsSelector);

  // keypress handler
  const handleInputChange = (
    _event: object,
    typedInSubreddit: string,
    _reason: string
  ) => {
    console.log(typedInSubreddit);
    dispatch(fetchSubreddits(typedInSubreddit));

    // setSearchQuery(typedInSubreddit);
    // find a list of subreddits that match what we've typed
    // doFetch(searchSubredditsURL(typedInSubreddit));
  };

  const setSubreddit = (subredditName: string) =>
    dispatch({
      type: 'SET_SUBREDDIT',
      payload: subredditName
    });

  // select a subreddit
  const handleSelectedSubreddit = (
    _event: any,
    selectedSubreddit: string | null
  ) => {
    if (selectedSubreddit) {
      setSubreddit(selectedSubreddit);
      setSearchQuery(selectedSubreddit);
    }
  };

  const isLoading = false;
  // const dropdownSubreddits: string[] = ['one', 'two', 'three']; // getSubredditNames(subreddits);
  const loading = (open && dropdownSubreddits.length === 0) || isLoading;

  return (
    <>
      <div data-testid='statevalue'>{state.payload}</div>{' '}
      <button
        data-testid='reactjs'
        onClick={() =>
          dispatchCtx({
            type: 'SET_SUBREDDIT',
            payload: 'reactjs'
          })
        }>
        reactjs
      </button>
      <button
        data-testid='ireland'
        onClick={() =>
          dispatch({
            type: 'SET_SUBREDDIT',
            payload: 'ireland'
          })
        }>
        ireland
      </button>
      <Autocomplete
        id='wp-autocomplete'
        data-testid='searchbar'
        className={classes.searchBar}
        onInputChange={handleInputChange}
        onChange={handleSelectedSubreddit}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={dropdownSubreddits}
        loading={loading}
        value={searchQuery}
        clearOnBlur
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
    </>
  );
};
export default SearchBar;
