import React, { FC, useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useSubreddit } from './useSubreddit';
import CircularProgress from '@material-ui/core/CircularProgress';

const dropdownSubreddits = ['Option 1', 'Option 2'];

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const SearchBar: FC = () => {
  const classes = useStyles();
  const { state, dispatch } = useSubreddit();
  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState<string | null>('');
  const [inputValue, setInputValue] = useState('');

  const selectNewSubreddit = (
    event: ChangeEvent<{}>,
    newSearchQuery: string | null
  ) => {
    if (newSearchQuery !== null) {
      console.log('selectNewSubreddit', Event, newSearchQuery);
      setSearchQuery(newSearchQuery);
      dispatch({
        type: 'SET_SUBREDDIT',
        payload: newSearchQuery
      });
    } else {
      console.log('selectNewSubreddit', 'Clear searchbar text');
    }
  };

  const changeSubredditSearchQuery = (
    event: ChangeEvent<{}>,
    newInputValue: string
  ) => {
    console.log('changeSubredditSearchQuery', event, newInputValue);
    setInputValue(newInputValue);
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
