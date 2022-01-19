import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2em;
  right: 0.5em;
  width: 300px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.background};
  border: 2px solid ${props => props.theme.colors.text};
  padding: 1.8rem 2rem;

  > * {
    list-style: none;
  }

  > span {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0.5rem 0;
  }

  li {
    font-weight: 200;
    > span {
      text-justify: distribute;
    }
  }
`;
