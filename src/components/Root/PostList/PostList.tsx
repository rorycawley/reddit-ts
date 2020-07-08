import React, { FC } from 'react';
import Post, { PostProps } from './Post/Post';
import Loading from './Loading';

export interface PostListProps {
  loading?: boolean;
  posts?: PostProps[];
}

const PostList: FC<PostListProps> = ({
  loading = false,
  posts = []
}: PostListProps) => {
  // if (loading) {
  //   return <div data-testid='postlist'>Loading</div>;
  // }

  return (
    <div data-testid='postlist'>
      {posts?.length ? (
        posts.map(post => <Post key={post.id} {...post} />)
      ) : (
        loading ? <Loading /> : <div>Empty</div>
      )}
    </div>
  );
};
export default PostList;
