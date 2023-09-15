import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  background: linear-gradient(to left, #31003e 0 60%, #4e0062);
  font-weight: 300;
  font-size: 20px;
  margin: 20px auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  position: relative;

  border-radius: 10px;
  span {
    text-shadow: 0 0 10px #fff, 0 0 10px #fff;
  }
`;

export const Search = styled.input`
  border: 0;
  height: 30px;
  width: 200px;
  border-radius: 5px;
  outline: none;
  padding: 20px;
  font-size: 16px;
`;
export const Container = styled.div`
  width: 90%;
  display: grid;
  margin: 20px auto;
  justify-items: center;
  margin-top: 150px;
  gap: 50px;
`;
export const Joke = styled.h3`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

export const JokeButton = styled.button`
  width: 100px;
  border: none;
  cursor: pointer;
  height: 30px;
  color: white;
  background-color: #ffc61c;
  opacity: 0.5;

  transition: 0.3s ease-in-out opacity;
  &:hover {
    opacity: 0.9;
  }
`;

export const Footer = styled.footer`
  height: 80px;
  background: linear-gradient(to left, #31003e 0 60%, #4e0062);
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  color: white;
  align-items: center;
  font-weight: 300;
  padding: 0 30px;
  justify-content: space-between;
  z-index: 2;
  a {
    font-size: 24px;
    color: white;
    transition: 0.3s ease-in-out opacity;
  }
  a:hover {
    color: #ffc61c;
  }
`;
export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;
export const SearchModal = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  padding: 10px;
  background: white;
  color: black;
  font-size: 16px;
  display: flex;
  z-index: 1;
  flex-direction: column;

`;
export const SingleSearchResult = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;
export const IdCell = styled.div`
  width: 25%;
`;
export const JokeCell = styled.div`
  width: 70%;
`;
