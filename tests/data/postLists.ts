import { PostListProps } from 'src/components/Root/PostList';
import {
  postBeforeAfter1,
  postBeforeAfter2,
  postBeforeAfter3,
  postBeforeAfter4
} from './individualPost';

export const postListLoading: PostListProps = {
  loading: true
};

export const postListEmptyList: PostListProps = {
  posts: []
};

export const postListWithFourPosts: PostListProps = {
  posts: [
    postBeforeAfter1.after,
    postBeforeAfter2.after,
    postBeforeAfter3.after,
    postBeforeAfter4.after
  ]
};
