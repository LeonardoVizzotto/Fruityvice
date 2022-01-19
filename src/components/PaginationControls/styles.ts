import styled, { css } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;

  > * {
    list-style: none;

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

const circle = css`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.colors.text};
  text-align: center;
`;

export const Stepper = styled.button<{ circle?: boolean; selected?: boolean }>`
  all: unset;
  cursor: pointer;
  opacity: ${props => (props.selected || props.circle ? 1 : 0.5)};
  ${props => (props.circle ? circle : ``)}

  &:disabled {
    opacity: 0.2;
    cursor: unset;
  }
`;
