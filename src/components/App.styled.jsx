import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Container = styled.section`
  margin: auto;
  max-width: 350px;
  padding: 16px;
  font-size: 24px;
`;

export const Title = styled.h1`
  color: ${theme.colors.dark};
  text-align: center;
  font-size: 42px;
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  font-size: 42px;
  margin-top: 24px;
`;
