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
import InPost from './InPost';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;  
  }
`;

const AppWrapper = styled.div`
  margin: 0;
  background-color: #fafafa;
  /* height: 100vh; */
`;

const AppHeader = styled.div`
  background-color: white;
  margin: 0;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const InstagramLogo = styled.img`
  object-fit: contain;
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
          <InstagramLogo
            alt={`Instagram logo`}
            src={`https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png`}
          />
        </AppHeader>
        <h1>Hello there</h1>
        <InPost />
        <InPost />
        <InPost />

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
