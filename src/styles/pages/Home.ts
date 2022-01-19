import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  margin: 1em 0;
  padding: 0 ${props => props.theme.sizes.horizontalPadding};
  flex: 1 0 auto;
`;
