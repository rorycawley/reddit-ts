import React, { FC } from 'react';

interface PostProps {
  author: string;
  id: string;
  image?: string;
  over18: boolean;
  selftext?: string;
  title: string;
  urltext?: string;
}

// url_overridden_by_dest
const Post: FC<PostProps> = ({
  author, // author
  id, // id
  image, // url_overridden_by_dest
  over18, // over_18
  selftext, // selftext
  title, // title
  urltext // url_overridden_by_dest
}: PostProps): JSX.Element => {
  return (
    <div id={id}>
      {over18 && <strong>Over 18</strong>}
      <div id={id + '-title'}>{title}</div>
      <div id={id + '-author'}>{author}</div>
      {selftext && <div id={id + '-selftext'}>{selftext}</div>}
      {image && <img id={id + '-image'} src={image} />}
      {urltext && (
        <a id={id + '-urltext'} href={urltext}>
          {urltext}
        </a>
      )}
    </div>
  );
};
export default Post;
