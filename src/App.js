import React from "react";
import "./App.css";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { SearchResults } from "./SearchResults";
import { Paginator } from "./Paginator";

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

function App() {
  const [searchTerm, setSearchTerm] = React.useState();
  const [activeSearch, setActiveSearchTerm] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(0);
  
  const [results, setResults] = React.useState();
  React.useEffect(() => {
    if (activeSearch !== undefined) {
      gf.search(activeSearch, { offset: currentPage * 5, limit: 5 }).then(setResults);
    }
  }, [activeSearch, currentPage]);

  return (
    <div className="App">
      <form
        onSubmit={event => {
          setActiveSearchTerm(searchTerm);
          setCurrentPage(0);
          event.preventDefault();
        }}
      >
        <input
          value={searchTerm}
          onChange={event => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      <SearchResults results={results} />
      {results !== undefined && (
        <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
