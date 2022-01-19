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
  padding: 0 ${props => props.theme.sizes.horizontalPadding};
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const ItemCount = styled.span`
  font-size: 0.7rem;
  height: 0.9rem;
  width: 0.9rem;
  display: inline-block;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.text};
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: -0.5em;
  right: -0.8em;
`;

export const Basket = styled.div`
  position: relative;
  > button {
    all: unset;
    cursor: pointer;
  }
`;
