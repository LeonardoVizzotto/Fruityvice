import styled from 'styled-components';

export default styled.button<{ filled?: boolean }>`
  width: 100%;
  border-radius: 30px;
  background-color: ${props =>
    props.filled ? props.theme.colors.text : 'transparent'};
  color: ${props =>
    props.filled ? props.theme.colors.background : props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.text};
  height: 2rem;
  cursor: pointer;
`;
