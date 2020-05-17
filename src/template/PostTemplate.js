import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'template/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 15rem 0.75fr;
  grid-template-columns: 0.25fr repeat(4, 1fr) 0.25fr;
  justify-items: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  grid-column: 1 / -1;
`;

const StyledImg = styled.div`
  height: 30rem;
  width: 30rem;
  grid-column: 2/3;
  align-self: start;
  background: ${({ img }) => `url(${img}) no-repeat`};
  background-size: contain;
  background-position: center;
`;

const StyledContent = styled.p`
  grid-column: 3/5;
  margin-bottom: 10rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.4;
  text-align: justify;

  ::first-letter {
    font-family: 'Courier New', Courier, monospace;
    font-size: ${({ theme }) => theme.fontSize.headingBig};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 0.75;
  }
`;

const PostTemplate = ({ title, link, content }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledHeading>{title}</StyledHeading>
      <StyledImg img={link} />
      <StyledContent>{content}</StyledContent>
    </StyledWrapper>
  </UserPageTemplate>
);

export default PostTemplate;
