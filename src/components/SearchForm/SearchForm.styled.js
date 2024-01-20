import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const SearchFormStyled = styled.form`
  width: 100%;
  max-width: 450px;
  position: relative;
`;

export const SearchFormInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: solid 2px violet;
  background-color: inherit;
  outline: none;
  width: 100%;
  height: 17px;
  max-width: 450px;
  font-size: 16px;
`;

export const SearchFormBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0.5px;
  right: -70px;
  background-color: inherit;
  border-radius: 5px;
  border: solid 2px violet;
  height: 40px;
  width: 40px;
`;

export const SearchFormBtnIcon = styled(ImSearch)`
  color: violet;
  width: 20px;
  height: 20px;
`;
