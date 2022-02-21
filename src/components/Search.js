import React from "react";
import axios from "axios";
import Show from "./Show";
const Search = (props) => {
  const goBack = () => {
    props.history.push("/");
  };
  const [state, setState] = React.useState(
    props.location.state ? props.location.state : ""
  );
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState("");
  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://fast-reef-22226.herokuapp.com/data`
      );
      if (response) {
        setResults(response);
        setInfo(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    async function getPosts() {
      if (props.location.state) {
        try {
          const response = await axios.get(
            `https://fast-reef-22226.herokuapp.com/data`
          );
          if (response) {
            setResults(response);
            setInfo(response);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);
  console.warn(info)
  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src="/images/small.png" alt="logo" onClick={goBack} />
        </div>
        <div className="search__form-input">
          <form className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home__input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

          </form>
        </div>
      </div>
      <Show results={results} info={info} />
    </div>
  );
};

export default Search;
