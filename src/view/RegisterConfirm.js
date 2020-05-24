import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'template/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import routes from 'routes';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primaryColor};
`;

const StyledParagraph = styled.p`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const RegisterConfirm = () => (
  <UserPageTemplate>
    <StyledWrapper>
      <Heading>You have succesfully created new accout.</Heading>
      <StyledParagraph>
        You can <StyledLink to={routes.login}>Log in</StyledLink> using your email and password.
      </StyledParagraph>
    </StyledWrapper>
  </UserPageTemplate>
);

export default RegisterConfirm;
