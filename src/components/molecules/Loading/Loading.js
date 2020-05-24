import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }

`;

const StyledAnimation = styled.div`
  font-size: ${({ theme }) => theme.fontSize.headingBig};
  color: ${({ theme }) => theme.color.primaryColorText};
  animation: ${LoadingAnimation} 2s infinite linear;
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
`;

const Loading = () => (
  <StyledWrapper>
    <StyledAnimation>Loading</StyledAnimation>`
  </StyledWrapper>
);

export default Loading;
