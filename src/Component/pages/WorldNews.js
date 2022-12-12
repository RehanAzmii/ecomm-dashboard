import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

const WorldNews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=45c3f57436514699add79835c4e26871"
      )
      .then((res) => {
        console.log(res);
        setData(res.data.articles);
      });
  }, []);
  return (
    <div>
      <Header />
      <br />
      <br />
      <h1>World News</h1>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {data.map((val) => {
            return (
              <div className="col-3 mt-5">
                <div
                  className="card"
                  style={{ width: "18rem;", height: "20rem" }}
                >
                  <img
                    src={val.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">{val.description}</p>
                    <center>
                      <a href={val.url} className="btn btn-primary">
                        World News
                      </a>
                    </center>
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

export default WorldNews;
