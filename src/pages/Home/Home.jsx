import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./styles.scss";

const Home = () => {
  //state
  const [searchText, setSearchText] = useState('');

  const handleSubmit = () => {
    e.preventDefault()
    if(searchText && searchText.trim()){
      //todo: add routing and push search to /search/:user
    }
  };

  return (
    <div className="home-page">
      <div className="main-container">
        <Header />
        <form className="input-container" onSubmit={() => handleSubmit()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search Github Username..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
