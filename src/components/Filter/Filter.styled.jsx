import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FilterContainer = styled.div`
  padding: 20px;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
  box-shadow: ${theme.shadows.small};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  transition: box-shadow ${theme.animation.cubicBezier};
  :hover {
    box-shadow: ${theme.shadows.medium};
  }
`;

export const FilterInput = styled.input`
  margin: auto;
  border: none;
  font-size: ${theme.fontSizes.medium};
  background-color: ${theme.colors.yellow};
  color: ${theme.colors.dark};
  :hover,
  :focus {
    outline: none;
  }
`;
