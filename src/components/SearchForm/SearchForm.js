import { useSearchParams } from 'react-router-dom';
import {
  SearchFormStyled,
  SearchFormBtn,
  SearchFormBtnIcon,
  SearchFormInput,
} from './SearchForm.styled';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleFormSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim();
    !query ? setSearchParams({}) : setSearchParams({ query: query });
  };

  return (
    <SearchFormStyled onSubmit={handleFormSubmit}>
      <SearchFormInput type="text" name="query" autoFocus autoComplete="off" />
      <SearchFormBtn type="submit">
        <SearchFormBtnIcon />
      </SearchFormBtn>
    </SearchFormStyled>
  );
};

export default SearchForm;
