import styled from 'styled-components';

export const Container = styled.footer`
  flex-shrink: 0;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  text-align: center;
  height: 10vh;

  > * {
    margin: 10px;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const FollowUsStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FollowUsLinks = styled.div`
  display: flex;

  > a {
    > svg {
      height: 24px;
      margin: 0 8px;
    }
  }
`;
