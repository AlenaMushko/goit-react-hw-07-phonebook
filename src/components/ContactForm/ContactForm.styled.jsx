import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background-color: ${theme.colors.light};
  box-shadow: ${theme.shadows.small};
  border-radius: 4px;
  transition: box-shadow ${theme.animation.cubicBezier};
  :hover {
    box-shadow: ${theme.shadows.medium};
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  font-size: ${theme.fontSizes.medium};
  background-color: ${theme.colors.background};
  color: ${theme.colors.dark};
  :hover,
  :focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
  padding: 8px;
  font-size: 16px;
  margin: auto;
  display: block;
  width: 50%;
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
