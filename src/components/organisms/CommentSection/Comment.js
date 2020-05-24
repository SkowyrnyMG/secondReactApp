import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-bottom: 1rem;
  &:not(:last-child) {
    border-bottom: ${({ theme }) => `1px solid${theme.color.dividerColor}`};
  }
`;

const StyledComment = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledUser = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Comment = ({ comment, user }) => (
  <StyledWrapper>
    <StyledComment>{comment}</StyledComment>
    <StyledUser>{user}</StyledUser>
  </StyledWrapper>
);

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Comment;
