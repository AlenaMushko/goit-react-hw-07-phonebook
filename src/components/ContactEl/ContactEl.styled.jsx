import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ElWraper = styled.div`
display: flex;
gap:16px;
justify-content: space-around;
align-items: center;
padding: 12px;
  background-color: ${theme.colors.light};
  box-shadow: ${theme.shadows.medium};
  border-radius: 12px;
  transition: box-shadow ${theme.animation.cubicBezier};
  :hover {
    box-shadow: ${theme.shadows.regular};
  }
`;

export const ElButton = styled.button`
  padding: 8px;
  font-size: 16px;
  margin: auto;
  display: block;
  border: 2px solid ${theme.colors.light};
  transition: background-color ${theme.animation.cubicBezier},
    color ${theme.animation.cubicBezier};
  :hover {
    background-color: ${theme.colors.light};
    color: ${theme.colors.dark};
    border: 2px solid ${theme.colors.dark};
    box-shadow: ${theme.shadows.regular};
  }
`;

