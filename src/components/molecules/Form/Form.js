import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/molecules/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledForm = styled.form`
  margin: 5rem;
  padding: 5rem 10rem 6rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryColorLight};
  border-radius: 10px;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const StyledTextArea = styled.textarea`
  height: 30rem;
  font-size: 2rem;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

class Form extends Component {
  state = {
    title: '',
    link: '',
    content: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  formReset = () => {
    setTimeout(() => {
      this.setState({ title: '', link: '', content: '' });
    }, 100);
  };

  render() {
    const { headingText, handleSubmit, buttonText } = this.props;
    const { title, link, content } = this.state;
    return (
      <StyledForm action='submit' onSubmit={(e) => handleSubmit(e, this.state)}>
        <Heading>{headingText}</Heading>
        <Input placeholder='title' name='title' onChange={(e) => this.handleChange(e)} value={title} />
        <Input placeholder='image link' name='link' onChange={(e) => this.handleChange(e)} value={link} />
        <Input
          as={StyledTextArea}
          placeholder='content'
          name='content'
          onChange={(e) => this.handleChange(e)}
          value={content}
        />
        <Button onwhitespace onClick={() => this.formReset()}>
          {buttonText}
        </Button>
      </StyledForm>
    );
  }
}

Form.propTypes = {
  headingText: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Form.defaultProps = {
  headingText: 'Fill empty spaces!',
};

export default Form;
