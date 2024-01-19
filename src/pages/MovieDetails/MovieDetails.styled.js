import styled from 'styled-components';

export const MovieDetailsWrapper = styled.section`
  padding: 15px;
  border-bottom: 2px solid black;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 15px;
`;

export const Thumb = styled.div`
  min-width: 300px;
  overflow: hidden;
`;

export const Info = styled.div`
  width: 500px;
  text-align: justify;
`;

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 2px solid black;
`;
