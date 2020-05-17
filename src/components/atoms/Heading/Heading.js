import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({ big, theme }) => (big ? theme.fontSize.headingBig : theme.fontSize.heading)};
  color: ${({ theme }) => theme.color.primaryColorDark};
`;

export default Heading;
