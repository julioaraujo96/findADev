import { useEffect, useState } from "react";
import Container from "../../Components/UI/Container/Container";
import Layout from "../../Components/UI/Layout/Layout";
import Card from "../../Components/Card/Card";
import Profile from "../../Components/Profile/Profile";
import Favorite from "../../Components/UI/Favorite/Favorite"
import Spinner from "../../Components/Spinner/Spinner";
import { BiArrowBack } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./styles.scss";
import Button from "../../Components/UI/Button/Button";

const api_url = "https://api.github.com/users/";

const SearchResult = () => {
  const { user } = useParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data, status } = await axios.get(`${api_url}${user}`);
        if (status === 200) {
          setUserData(data);
          setIsLoading(false);
        }
      } catch (e) {
        setError("Failed to fetch data from server...");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const outputData = () => {
    let output;
    if (userData && !error) {
      return (output = (
        <Card>
          <Profile user={user} userData={userData} />
          <Favorite />
        </Card>
      ));
    }
    if (error) {
      return (output = <span className="error">{error}</span>);
    }
  };
  return (
    <Layout>
      <Container>
        {isLoading ? <Spinner /> : outputData()}
        {!isLoading && (
          <div className="btn-back">
            <Button type="button" modifier="return">
              <Link to="/">
                Return <BiArrowBack className="arrow" />
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default SearchResult;
