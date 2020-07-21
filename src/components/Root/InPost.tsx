import Avatar from '@material-ui/core/Avatar';
import React, { FC } from 'react';
import styled from 'styled-components';

const Post = styled.div`
  background-color: white;
  max-width: 500px;
  border: 1px solid lightgrey;
`;

const PostAvatar = styled(Avatar)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #6772e5;
  color: #fff;
  margin-right: 10px;
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

const PostHeader = styled.div`
  align-items: center;
  display: flex;
  padding: 20px;
`;

const PostImage = styled.img`
  object-fit: contain;
  width: 100%;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;

const PostText = styled.strong`
  font-weight: normal;
  padding: 20px;
`;

const UserNameText = styled.strong``;

const InPost: FC = () => {
  return (
    <Post>
      <PostHeader>
        <PostAvatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        <h3>Username</h3>
      </PostHeader>
      <PostImage
        alt={`User Avatar`}
        src={`https://www.pngrepo.com/png/221028/180/user-avatar.png`}
      />
      <PostText>
        <UserNameText>Username:</UserNameText> wow on day three
      </PostText>
    </Post>
  );
};

export default InPost;
