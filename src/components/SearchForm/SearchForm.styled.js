import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const SearchForm = styled.form`
  width: 100%;
  max-width: 450px;
  position: relative;
`;

export const SearchFormInput = styled.input`
  margin: 20px 0 0 40px;
  padding: 15px;

  border-radius: 5px;
  border: solid 2px violet;
  background-color: inherit;
  outline: none;
  color: violet;
  width: 100%;
  height: 35px;
  max-width: 450px;
  font-size: 16px;
`;

export const SearchFormBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: -40px;
  background-color: inherit;
  border-radius: 5px;
  border: solid 2px violet;
  height: 35px;
  width: 40px;
`;

export const SearchFormBtnIcon = styled(ImSearch)`
  color: violet;
  width: 20px;
  height: 20px;
`;
