import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'template/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import CommentSection from 'components/organisms/CommentSection/CommentSection';
import { Link } from 'react-router-dom';
import routes from 'routes';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 15rem auto 15rem auto 5rem;
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
  grid-row: 2 / 3;
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

const StyledButton = styled(Button)`
  grid-column: 3 / 5;
  grid-row: 3 / 4;
`;

const StyledCommentSectionBox = styled.div`
  grid-row: 4/5;
  grid-column: 3 / 5;
`;

const PostTemplate = ({ title, link, content, id }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledHeading>{title}</StyledHeading>
      <StyledImg img={link} />
      <StyledContent>{content}</StyledContent>
      <StyledCommentSectionBox>
        <CommentSection id={id} />
      </StyledCommentSectionBox>
      <StyledButton as={Link} to={routes.blog} atwhitespace='true'>
        Go back
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

PostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PostTemplate;
