import styled from 'styled-components';

const Button = styled.button`
  background: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ onwhitespace, theme }) => (onwhitespace ? theme.color.primaryColorDark : theme.color.primaryColorText)};
  font-family: inherit;
  padding: 1rem 4rem;
  border-radius: 1rem;
  border: 2px solid
    ${({ onwhitespace, theme }) => (onwhitespace ? theme.color.primaryColorDark : theme.color.primaryColorText)};
  outline: none;
  transition: color 0.5s;
  cursor: pointer;

  :hover,
  :focus {
    color: ${({ onwhitespace, theme }) => (onwhitespace ? 'white' : theme.color.primaryColorDark)};
    background-color: ${({ onwhitespace, theme }) =>
      onwhitespace ? theme.color.primaryColorDark : theme.color.primaryColorText};
  }
`;

export default Button;
