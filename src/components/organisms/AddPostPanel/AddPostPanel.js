import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from 'components/molecules/Form/Form';
import { connect } from 'react-redux';
import { addItem as addItemAction, openCloseModal } from 'store/actions/blogActions';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  min-width: 80rem;
  height: 100vh;
  right: 0;
  background-color: ${({ theme }) => theme.color.primaryColorLight};
  border-left: 15px solid ${({ theme }) => theme.color.primaryColor};
  box-shadow: ${({ theme, isPanelOpen }) =>
    isPanelOpen ? `15px 0 20px 15px ${theme.color.primaryColorDark}` : 'none'};
  z-index: 500;
  transform: ${({ isPanelOpen }) => (isPanelOpen ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in-out;
`;

const AddPostPanel = ({ isPanelOpen, addItem, togglePanel }) => {
  const handleSubmit = (e, val) => {
    e.preventDefault();
    // console.log(e.target.input.value); tutajKoniec
    addItem(val);
    // [...e.target.children].filter((child) => child.tagName.includes('TEXTAREA') || child.tagName.includes('INPUT'));
    togglePanel();
  };

  return (
    <StyledWrapper isPanelOpen={isPanelOpen}>
      <Form headingText='Add new post!' buttonText='add post' handleSubmit={(e, val) => handleSubmit(e, val)} />
    </StyledWrapper>
  );
};

AddPostPanel.propTypes = {
  isPanelOpen: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  togglePanel: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (e, item) => dispatch(addItemAction(e, item)),
  togglePanel: () => dispatch(openCloseModal()),
});

export default connect(null, mapDispatchToProps)(AddPostPanel);
