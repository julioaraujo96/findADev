import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Button from "../../Components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import Layout from "../../Components/UI/Layout/Layout";
import Container from "../../Components/UI/Container/Container";

const Home = () => {
  //state
  const [searchText, setSearchText] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchText && searchText.trim()){
      navigate(`/search/${searchText.trim()}`);
    }
  };

  return (
      <Layout>
        <Container>
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
      </Container>
      </Layout>
  );
};

export default Home;
