import React, { FC } from 'react';
import Post, { PostProps } from './Post/Post';
import Loading from './Loading';
import EmptyList from './EmptyList';

export interface PostListProps {
  loading?: boolean;
  posts?: PostProps[];
}

const PostList: FC<PostListProps> = ({
  loading = false,
  posts = []
}: PostListProps) => {
  if (loading) {
    return (
      <div data-testid='postlist'>
        <Loading />
      </div>
    );
  }

  if (posts?.length === 0) {
    return (
      <div data-testid='postlist'>
        <EmptyList
          header="There's nothing to show right now."
          subheader='Please select a subreddit.'
        />
      </div>
    );
  }

  return (
    <div data-testid='postlist'>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
export default PostList;
