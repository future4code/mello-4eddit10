import React, { useReducer } from "react";
import SearchContext from "./contexts/SearchContext";
import { searchReducer, initialState } from "./components/reducers/search";
import Router from "./components/Router";
import { GlobalStyle } from "./styles";

function App() {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <GlobalStyle>
      <SearchContext.Provider
        value={{ search: state.search, dispatch: dispatch }}
      >
        <Router />
      </SearchContext.Provider>
    </GlobalStyle>
  );
}

export default App;
