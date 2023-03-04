import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const List = styled.ul`
  padding: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${theme.colors.light};
  list-style:none;
  box-shadow: ${theme.shadows.small};
  `;
export const Item = styled.li`
  :not(:first-child) {
    margin-top: 28px;
  }
`;
