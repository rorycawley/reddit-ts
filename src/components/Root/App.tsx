import React, { FC } from 'react';
import { SubredditProvider } from './useSelectedSubreddit';
import SearchBar from './SearchBar';
import { fetchSubreddits } from '~/store/subreddits';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import Header from './Header';
import PostListTitle from './PostList/PostListTitle';

import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import PostList from './PostList';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;  
  }
`;

const AppWrapper = styled.div`
  margin: 0;
`;

const AppHeader = styled.div`
  margin: 0;
`;

const useStyles = makeStyles(() => ({
  content: {
    padding: '24px'
  },
  typographyStyles: {
    flex: 1
  }
}));

const App: FC = () => {
  const classes = useStyles();

  // redux
  const dispatch = useDispatch();
  const subredditsSelector = (state: RootState): string[] =>
    state.subreddits.subreddits as string[];
  const subreddits = useSelector<RootState, string[]>(subredditsSelector);

  return (
    <SubredditProvider>
      <CssBaseline />
      <AppWrapper>
        <AppHeader>
          <h1>Hello there</h1>
        </AppHeader>
        <Grid container id='Root' direction='column'>
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8} className={classes.content}>
              <SearchBar />
              <PostListTitle />
              <PostList />

              <button onClick={() => dispatch(fetchSubreddits('reactjs'))}>
                reactjs
              </button>
              <button onClick={() => dispatch(fetchSubreddits('keto'))}>
                keto
              </button>
              <div>
                {subreddits.map(subreddit => (
                  <div key={subreddit}>{subreddit}</div>
                ))}
              </div>
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </AppWrapper>
      <GlobalStyle />
    </SubredditProvider>
  );
};

export default App;
