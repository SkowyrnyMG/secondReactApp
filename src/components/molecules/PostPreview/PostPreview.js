import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getData } from 'store/actions/blogActions';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: appear 1s forwards ease-out;

  @keyframes appear {
    0% {
      transform: translateY(150px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledImage = styled.img`
  height: 20rem;
`;

const PostPreview = ({ link, title, getDatabase }) => (
  <StyledWrapper onClick={() => getDatabase()}>
    <StyledImage src={link} alt='Artilce' />
    <h2>{title}</h2>
  </StyledWrapper>
);

PostPreview.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  getDatabase: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getDatabase: () => dispatch(getData()),
});

export default connect(null, mapDispatchToProps)(PostPreview);
