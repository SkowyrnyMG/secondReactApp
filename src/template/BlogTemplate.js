import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'template/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import AddPostPanel from 'components/organisms/AddPostPanel/AddPostPanel';
import { connect } from 'react-redux';
import { openCloseModal } from 'store/actions/blogActions';

const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  padding-top: 5rem;
  grid-template-rows: 10rem 1fr;
  grid-template-columns: 1366px;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

const StyledPostsWrapper = styled.div`
  width: 100%;
  margin: 10rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5rem;
  grid-row-gap: 8rem;
`;

const StyledPanelButton = styled.button`
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  height: 8rem;
  width: 8rem;
  background-color: ${({ theme }) => theme.color.primaryColorDark};
  border: none;
  outline: none;
  border-radius: 50%;
  box-shadow: 0 5px 10px -2px hsla(0, 0%, 0%, 0.6);
  z-index: 50000;
  cursor: pointer;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    width: 30%;
    background-color: ${({ theme }) => theme.color.primaryColorText};
    transform: translate(-50%, -50%);
    transition: transform 0.5s;
  }

  ::before {
    transform: ${({ isPanelOpen }) =>
      isPanelOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%) rotate(90deg)'};
  }

  ::after {
    transform: ${({ isPanelOpen }) => (isPanelOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%)')};
  }
`;

const BlogTemplate = ({ children, isPostPanelOpen, togglePanel }) => {
  return (
    <UserPageTemplate>
      <>
        <StyledWrapper>
          <Heading big>blog news from my life</Heading>
          <StyledPostsWrapper>{children}</StyledPostsWrapper>
        </StyledWrapper>
        <StyledPanelButton isPanelOpen={isPostPanelOpen} onClick={() => togglePanel()} />
        <AddPostPanel isPanelOpen={isPostPanelOpen} />
      </>
    </UserPageTemplate>
  );
};

BlogTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPostPanelOpen: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

const mapStateToProps = ({ blog }) => {
  const { isPostPanelOpen } = blog;
  return { isPostPanelOpen };
};

const mapDispatchToProps = (dispatch) => ({
  togglePanel: () => dispatch(openCloseModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogTemplate);
