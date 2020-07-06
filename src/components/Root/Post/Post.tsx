import React, { FC } from 'react';

interface PostProps {
  id: string;
  title: string;
  thumbnail?: string;
}
const Post: FC<PostProps> = ({
  id,
  title,
  thumbnail
}: PostProps): JSX.Element => {
  return (
    <div id={id}>
      <div id={id + '-title'}>{title}</div>
      {thumbnail != null && <img id={id + '-image'} src={thumbnail} />}
    </div>
  );
};
export default Post;
