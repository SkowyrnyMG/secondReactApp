import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Input = styled.input`
  width: 70rem;
  height: 4rem;
  padding-left: 2rem;
  border-radius: 10px;
  border: none;
  font-size: 2rem;
  outline: none;
  transition: all 0.25s;

  :focus {
    box-shadow: 0 1rem 1rem -0.7rem hsla(0, 0%, 0%, 0.3);
    transform: scale(1.03);
  }

  ::placeholder {
    text-transform: uppercase;
  }
`;

export default Input;
