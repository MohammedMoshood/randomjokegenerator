import { useCallback, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const JokeContext = createContext({});

export const JokeProvider = ({ children }) => {
  const [joke, setJoke] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [resultsPage, setResultsPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const url = "https://icanhazdadjoke.com";
  const searchUrl =
    url + `/search?limit=5&term=${searchTerm}&page=${resultsPage}`;
  const getSearchResults = useCallback(() => {
    fetch(searchUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error fetching search results data: ", error);
      });
  }, [searchUrl]);
  const getJoke = () => {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setJoke(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  useEffect(() => {
    getJoke();
  }, []);
  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);
  return (
    <JokeContext.Provider
      value={{
        joke,
        getJoke,
        searchResults,
        searchTerm,
        setSearchTerm,
        setResultsPage,
        resultsPage
      }}
    >
      {children}
    </JokeContext.Provider>
  );
};

export default JokeContext;
