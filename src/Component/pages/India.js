import React, { useEffect, useState } from "react";

import axios from "axios";
import Header from "./Header";

const India = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=45c3f57436514699add79835c4e26871"
      )
      .then((response) => {
        console.log(response);
        setData(response.data.articles);
      });
    // };
  }, []);
  // const getNews = () => {
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/top-headlines?country=in&apiKey=45c3f57436514699add79835c4e26871"
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       setData(response.data.articles);
  //     });
  // };

  return (
    <div>
      <Header />
      <br /> <br />
      <center>
        <h1>India News</h1>
      </center>
      <br /> <br />
      {/* <button className="btn btn-primary" onClick={getNews}>
        India News
      </button> */}
      <br />
      <div className="container">
        <div className="row">
          {data.map((value, id) => {
            return (
              <div className="col-3" key={id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <h5 className="card-title">{value.author}</h5>
                    <h5 className="card-title">{value.content}</h5>
                    <p className="card-text">{value.publishedAt}</p>
                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="btn btn-primary">
                      Main News
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default India;
