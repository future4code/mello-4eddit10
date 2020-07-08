import React, { useReducer } from "react";
import SearchContext from "./contexts/SearchContext";
import { searchReducer, initialState } from "./components/reducers/search";
import Router from "./components/Router";

function App() {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <div>
      <SearchContext.Provider
        value={{ search: state.search, dispatch: dispatch }}
      >
        <Router />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
