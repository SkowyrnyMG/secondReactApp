import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import person from 'assets/person.PNG';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import UserPageTemplate from 'template/UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 5rem 0 0 0;
  width: 1366px;
  height: 100%;
  min-height: 700px;
  /* background-color: green; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledInfoBox = styled.div`
  position: relative;
  width: 1150px;
  height: 60%;
  border: 10px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 50px;
  box-sizing: border-box;
  text-align: center;

  ::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 1200px;
    bottom: -10px;
    left: -50%;
    background-color: ${({ theme }) => theme.color.primaryColor};
    z-index: 50;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  width: 55%;
  bottom: -10px;
  left: -28%;
`;

const StyledInfoContent = styled.div`
  width: 800px;
  height: 100%;
  padding: 5rem 10rem 5rem 2rem;
  margin-left: auto;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 4rem !important;
`;

const HomePage = () => (
  <UserPageTemplate>
    <StyledWrapper>
      <Heading big>Another Frontend pre Junior</Heading>
      <StyledInfoBox>
        <StyledImage src={person} alt='person' />
        <StyledInfoContent>
          <Heading>Hello I&rsquo;m Matthew</Heading>
          <StyledParagraph>
            I am just a guy who is writting some lines of code every single day after work. I would like to be a guy who
            will be writting those lines of code also in work and after. Be a human and hire a Junior :D. I&rsquo;ve
            made this website to practise some React/Redux after 2nd stage of Hello Roman course. In close future I will
            write some IRL, bigger accounting webapp and after that I hope that you will be 100% convinced to give me a
            try in your Company!
          </StyledParagraph>
          <Button as={Link} to='/blog' onwhitespace>
            Go to blog!
          </Button>
        </StyledInfoContent>
      </StyledInfoBox>
    </StyledWrapper>
  </UserPageTemplate>
);

export default HomePage;
