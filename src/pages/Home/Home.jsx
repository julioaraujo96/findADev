import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home-page">
      <div className="main-container">
        <Header />
        <form className="inputContainer">
          <input
            type="text"
            className="search-input"
            placeholder="Search Github Username..."
          />
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
        <Card>
            <h1>hello</h1>
        </Card>
      </div>
    </div>
  );
};

export default Home;
