import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  height: 8vh;
  position: sticky;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const Basket = styled.a`
  &:focus,
  &:hover {
    opacity: 0.5;
  }
`;
