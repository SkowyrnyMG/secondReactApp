import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from 'components/molecules/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primaryColor};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.primaryColorText};
`;

const StyledForm = styled.form`
  margin: 5rem;
  padding: 5rem 10rem 6rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryColorLight};
  border-radius: 10px;
  box-shadow: 0 20px 30px -15px hsla(0, 0%, 0%, 0.5);

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const AuthTemplate = () => (
  <StyledWrapper>
    <StyledForm action=''>
      <Heading>LogIn</Heading>
      <Input placeholder='login..' />
      <Input placeholder='password..' />
      <Button onwhitespace>Log in</Button>
    </StyledForm>
    <StyledLink to='/'>Take me from here!</StyledLink>
  </StyledWrapper>
);

export default AuthTemplate;
