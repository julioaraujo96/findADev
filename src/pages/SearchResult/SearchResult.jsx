import { useEffect, useState } from "react";
import Container from "../../Components/UI/Container/Container";
import Layout from "../../Components/UI/Layout/Layout";
import Card from "../../Components/Card/Card";
import Profile from "../../Components/Profile/Profile";
import Spinner from "../../Components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import axios from "axios";

const api_url = "https://api.github.com/users/";
//https://api.github.com/users/defunkt
const SearchResult = () => {
  const { user } = useParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data, status } = await axios.get(`${api_url}${user}`);
      if (status === 200) {
        setUserData(data);
        setIsLoading(false);
      } else {
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
        </Card>
      ));
    }
    if (error) {
      return (output = error);
    }
  };
  return (
    <Layout>
      <Container>{isLoading ? <Spinner /> : outputData()}</Container>
    </Layout>
  );
};

export default SearchResult;
