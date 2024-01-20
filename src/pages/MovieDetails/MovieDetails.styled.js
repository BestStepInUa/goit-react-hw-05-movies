import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsWrapper = styled.section`
  padding: 15px;
  border-bottom: 2px solid black;
`;

export const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 2px solid black;
`;

export const GoBackBtn = styled(Link)`
  padding: 7px 10px;
  margin-left: 15px;
  margin-bottom: 15px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: violet;
  border: transparent;
  border-radius: 5px;
  font-weight: bold;
`;
