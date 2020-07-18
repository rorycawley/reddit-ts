import React, { FC, useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useSubreddit } from './useSubreddit';

const options = ['Option 1', 'Option 2'];

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

  return (
    <div>
      <div>{`value: ${
        searchQuery !== null ? `'${searchQuery}'` : 'null'
      }`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={searchQuery}
        onChange={selectNewSubreddit}
        inputValue={inputValue}
        onInputChange={changeSubredditSearchQuery}
        id='controllable-states-demo'
        options={options}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label='Controllable' variant='outlined' />
        )}
      />
    </div>
  );
};
export default SearchBar;
