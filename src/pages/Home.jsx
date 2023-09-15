import React, { useContext } from "react";
import {
  Container,
  Footer,
  Header,
  IdCell,
  Joke,
  JokeButton,
  JokeCell,
  Search,
  SearchModal,
  SingleSearchResult,
  SocialLinks,
} from "../styles/styles";
import JokeContext from "../contexts/context";
import {
  FaTwitterSquare,
  FaGitSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
const Home = () => {
  const { joke, getJoke, searchResults, setSearchTerm } =
    useContext(JokeContext);
  const jokes = searchResults?.results;
  console.log(jokes);
  const jokeText = joke?.joke;
  return (
    <>
      <Header>
        <span>
          <b>R</b>andom <br /> <b>Dad</b> <b>J</b>okes <b>.</b>
        </span>
        <Search
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search Jokes"
        ></Search>
        {/* <SearchModal>
          <SingleSearchResult>
            <IdCell>
              <b>ID</b>
            </IdCell>
            <JokeCell>
              <b>Joke</b>
            </JokeCell>
          </SingleSearchResult>
          {jokes?.map((item, i) => {
            const { id, joke } = item;
            return (
              <SingleSearchResult key={i}>
                <IdCell>{id}</IdCell>
                <JokeCell>{joke}</JokeCell>
              </SingleSearchResult>
            );
          })}
        </SearchModal> */}
      </Header>

      <Container>
        <Joke>{jokeText}</Joke>
        <JokeButton onClick={() => getJoke()}>Another</JokeButton>
      </Container>

      <Footer>
        <span>
          wale<b>V</b>aries
        </span>
        <SocialLinks>
          <a href="https://x.com/walevaries">
            <FaTwitterSquare />
          </a>
          <a href="https://github.com/MohammedMoshood">
            <FaGitSquare />
          </a>
          <a href="https://www.instagram.com/walevaries/">
            <FaInstagramSquare />
          </a>
          <a href="https://www.linkedin.com/in/mohammedmoshood/">
            <FaLinkedin />
          </a>
        </SocialLinks>
      </Footer>
    </>
  );
};

export default Home;
