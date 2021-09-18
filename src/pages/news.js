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
  console.log("news: ", news);

  return (
    <Fragment>
      <Headernews />
      <div>
        <button type="button" onClick={getNewsData}>
          Get News!
        </button>

        <ul>
          {news.map((article) => (
            <li key={article.publishedAt}>
              <img src={article.urlToImage} alt="news img" />
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
