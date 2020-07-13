import React, { useState, useContext } from "react";
import SearchContext from "../contexts/SearchContext";
import {
  HeaderButton,
  HeaderInput,
  HeaderCleanButton,
  FilterContainer,
} from "./../styles";

const Search = () => {
  const searchContext = useContext(SearchContext);
  const [name, setName] = useState(searchContext.search.name);

  const handleApplySearch = () => {
    const newSearch = { name: name };

    searchContext.dispatch({ type: "SET_SEARCH", search: newSearch });
  };

  const handleResetSearch = () => {
    searchContext.dispatch({ type: "RESET_SEARCH" });
    setName("");
  };

  return (
    <FilterContainer>
      <HeaderInput
        placeholder="Buscar por..."
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <span>
        <HeaderButton onClick={handleApplySearch}>Buscar</HeaderButton>
        <HeaderCleanButton onClick={handleResetSearch}>
          Limpar
        </HeaderCleanButton>
      </span>
    </FilterContainer>
  );
};

export default Search;
