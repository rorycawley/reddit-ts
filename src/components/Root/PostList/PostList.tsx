import React, { FC } from 'react';
import Post, { PostProps } from './Post/Post';

export interface PostListProps {
  loading?: boolean;
  posts?: PostProps[];
}

const PostList: FC<PostListProps> = ({
  loading = false,
  posts = []
}: PostListProps) => {
  if (loading) {
    return <div data-testid='postlist'>Loading</div>;
  }

  if (posts?.length === 0) {
    return <div data-testid='postlist'>Empty</div>;
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
