import React, { useState } from 'react'
import './styles.scss'

const Home = () => {
  return (
    <div className="home-page">
      <div className="main-container">
        <header>
          <h1>findADev.</h1>
          <span>Light</span>
        </header>
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
      </div>
    </div>
  );
};

export default Home;