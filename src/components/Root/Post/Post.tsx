import React, { FC } from 'react';

interface PostProps {
  title: string;
}
const Post: FC<PostProps> = ({ title }: PostProps): JSX.Element => {
  return <div>{title}</div>;
};
export default Post;
