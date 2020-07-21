import Avatar from '@material-ui/core/Avatar';
import React, { FC } from 'react';
import styled from 'styled-components';

const PostHeader = styled.div`
  display: flex;
  align-items: center;
`;

const PostImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  margin-right: 10px;
  &:hover {
    background-color: #5469d4;
  }
`;

const UserComment = styled.strong`
  font-weight: normal;
`;

const UserNameText = styled.strong``;

const InPost: FC = () => {
  return (
    <div>
      <PostHeader>
        <StyledAvatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        <h3>Username</h3>
      </PostHeader>
      <PostImage
        alt={`User Avatar`}
        src={`https://www.pngrepo.com/png/221028/180/user-avatar.png`}
      />
      <UserComment>
        <UserNameText>Username:</UserNameText> wow on day three
      </UserComment>
    </div>
  );
};

export default InPost;
