const REDDIT_API_URI = 'https://www.reddit.com';

const querySubredditsURL = (subredditQuery = ''): string =>
  `${REDDIT_API_URI}/api/subreddit_autocomplete.json?query=${subredditQuery}&include_over_18=0&include_profiles=0`;

export default querySubredditsURL;
