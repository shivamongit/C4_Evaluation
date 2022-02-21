import React from "react";

const Show = (props) => {
  const { results, info } = props;
  return (
    <div className="detailed-result">
      <div className="result">
        {info ? `Total results: ${info.totalResults}` : ""}
      </div>
      {results.length > 0
        ? results.map((result) => (
            <div className="c">
              <div className="link">
                <a href={result.displayLink}>{result.displayLink}</a>
              </div>
              <div className="title">
                <a href={result.link}>{result.title}</a>
              </div>
              <div className="desc">
                <p>{result.snippet}</p>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Show;
