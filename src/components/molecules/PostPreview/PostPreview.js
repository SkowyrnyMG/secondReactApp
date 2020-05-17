import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

const appear = keyframes`
    0% {
      transform: translateY(150px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: ${appear} 1s forwards ease-out;
  cursor: pointer;
  transition: box-shadow .25s;

  :hover {
    /* background-color: ${({ theme }) => theme.color.primaryColorLight}; */
    box-shadow: 0 0rem 3rem -1rem hsla(0, 0%, 0%, .6);
  }

`;

const StyledImage = styled.img`
  height: 20rem;
`;

const PostPreview = ({ handleClick, id, link, title }) => (
  <StyledWrapper onClick={handleClick}>
    <StyledImage src={link} alt='Artilce' />
    <h2>{title}</h2>
  </StyledWrapper>
);

PostPreview.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  post: 1,
});

export default connect(mapStateToProps)(PostPreview);
