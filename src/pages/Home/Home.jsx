import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Button from "../../Components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Home = () => {
  //state
  const [searchText, setSearchText] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchText && searchText.trim()){
      //todo: add routing and push search to /search/:user
      navigate(`/search/${searchText.trim()}`);
    }
  };

  return (
    <div className="home-page">
      <div className="main-container">
        <Header />
        <form className="input-container" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="search-input"
            placeholder="Search Github Username..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="submit" modifier="search">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
