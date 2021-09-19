import React, { Fragment, useState } from "react";
import axios from "axios";
import Headernews from "./components/Headernews";

export const News = () => {
  const URL =
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=463fb04e416748ff9dad3866df683806";
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const getNewsData = async () => {
    let result;

    try {
      result = await axios.get(`${URL}`);
      setNews(result.data.articles);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Fragment>
      <Headernews />
      <div style={{ backgroundColor: "whitesmoke" }}>
        <button
          style={{
            borderRadius: 30,
            padding: 10,
            marginLeft: "47%",
            marginBottom: "1%",
            marginTop: "1%",
            backgroundColor: "#19345e",
            color: "whitesmoke",
            cursor: "pointer",
            borderColor: "#f47522",
          }}
          type="button"
          onClick={getNewsData}
        >
          Get News!
        </button>
        {error && <span>404 Error</span>}
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            textDecoration: "none",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          {news.map((article) => (
            <li
              data-testid="newslist"
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
              key={article.publishedAt}
            >
              <img
                style={{ width: "40%" }}
                src={article.urlToImage}
                alt="news img"
              />
              <a
                style={{ color: "#f47522", fontSize: 24, textAlign: "center" }}
                href={article.url}
                data-testid="jumlahnews"
              >
                {article.title}
              </a>
              <p style={{ color: "#19345e", width: "70%" }}>
                {article.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
