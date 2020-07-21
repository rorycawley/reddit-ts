import React, { FC } from 'react';
import styled from 'styled-components';

const UserAvatar = styled.img`
  object-fit: contain;
`;

const InPost: FC = () => {
  return (
    <div>
      <h3>Username</h3>
      <UserAvatar
        alt={`User Avatar`}
        src={`https://www.pngrepo.com/png/221028/180/user-avatar.png`}
      />
    </div>
  );
};

export default InPost;
