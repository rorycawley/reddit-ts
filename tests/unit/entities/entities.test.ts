import { IPost, IPostList, Subreddit, ISubredditList } from 'src/entities';
import {
  postBeforeAfter1,
  postBeforeAfter2,
  postBeforeAfter3,
  postBeforeAfter4
} from '../../data';

describe('entities', () => {
  it('can create a subreddit', () => {
    const subreddit: Subreddit = 'reactjs';
    expect(subreddit).toBe('reactjs');
  });

  it('can create a subreddit list', () => {
    const subredditList: ISubredditList = {
      subreddits: ['ireland', 'reactjs', 'news']
    };
    expect(subredditList).toStrictEqual({
      subreddits: ['ireland', 'reactjs', 'news']
    });
  });

  it('can create a post', () => {
    const post: IPost = postBeforeAfter1.after;

    expect(post).toStrictEqual(postBeforeAfter1.after);
  });

  it('can create a post list', () => {
    const postList: IPostList = {
      posts: [
        postBeforeAfter1.after,
        postBeforeAfter2.after,
        postBeforeAfter3.after,
        postBeforeAfter4.after
      ]
    };

    expect(postList).toStrictEqual({
      posts: [
        postBeforeAfter1.after,
        postBeforeAfter2.after,
        postBeforeAfter3.after,
        postBeforeAfter4.after
      ]
    });
  });
});
