import styled from 'styled-components';

const Button = styled.button`
  background: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ atwhitespace, theme }) =>
    atwhitespace === 'true' ? theme.color.primaryColorDark : theme.color.primaryColorText};
  font-family: inherit;
  padding: 1rem 4rem;
  border-radius: 1rem;
  border: 2px solid
    ${({ atwhitespace, theme }) =>
      atwhitespace === 'true' ? theme.color.primaryColorDark : theme.color.primaryColorText};
  outline: none;
  transition: color 0.5s;
  cursor: pointer;

  :hover,
  :focus {
    color: ${({ atwhitespace, theme }) => (atwhitespace === 'true' ? 'white' : theme.color.primaryColorDark)};
    background-color: ${({ atwhitespace, theme }) =>
      atwhitespace === 'true' ? theme.color.primaryColorDark : theme.color.primaryColorText};
  }
`;

export default Button;
