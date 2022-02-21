import React from "react";
const Home = (props) => {
  const [state, setState] = React.useState("");
  const searchGoogle = (e) => {
    props.history.push({ pathname: "/search", state });
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="logo">
          <img src="/images/googleLogo.png" alt="Logo" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="search_box"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
          <div className="home__group">
            <input type="submit" className="home__btn" value="Google Search" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
