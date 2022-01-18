import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImagePlaceHolder = styled.div`
  display: block;
  background-color: ${props => props.theme.colors.grey};
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 10px;
  margin: 1px;
`;

export const Details = styled.div``;
