import React, { FC } from 'react';

// import Post, { PostProps } from '../src/components/Root/PostList/Post';
import PostList from '../src/components/Root/PostList';
import { postListWithFourPosts } from '../tests/data/postLists';

export default {
  title: 'PostList',
  component: PostList
};

export const Default: FC = () => <PostList />;
export const Loading: FC = () => <PostList loading={true} />;
export const Empty: FC = () => <PostList posts={[]} />;
export const FourPosts: FC = () => (
  <PostList posts={postListWithFourPosts.posts} />
);
// export const Loading: FC = () => <PostList {...postListLoading} />;
// export const PostListEmptyList: FC = () => (
//          <PostList title='Loading2' {...postListEmptyList} />
//        );
// export const PostListWithFourPosts: FC = () => (
//   <PostList {...postListWithFourPosts} />
// );

// export default { loading: false, posts: [] };
