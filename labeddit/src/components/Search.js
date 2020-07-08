import React, { useState, useContext } from "react";
import SearchContext from "../contexts/SearchContext";

const Search = props => {
    const searchContext = useContext(SearchContext);
    const [name, setName] = useState(searchContext.search.name);

    const handleApplySearch = () => {
        const newSearch = { name: name };

        searchContext.dispatch({ type: "SET_SEARCH", search: newSearch});
    };

    const handleResetSearch = () => {
        searchContext.dispatch({ type: "RESET_SEARCH" });
        setName("");
    };

    return (
        <div>
            <h4>Filtro de Busca</h4>
            <input
                placeholder="Buscar por..."
                value={name}
                type="text"
                onChange={event => setName(event.target.value)}
            />
            <button onClick={handleApplySearch}>Buscar</button>
            <button onClick={handleResetSearch}>Limpar</button>
        </div>
    )
};

export default Search;
