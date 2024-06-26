import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = ({cat}) => {
  const [Data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=fc1bbd1d8c83470eae968d2887456098`
        : "https://newsapi.org/v2/top-headlines?country=in&apiKey=fc1bbd1d8c83470eae968d2887456098"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div className="container d-flex justify-content-center align-items-center flex-column my-3 p-3" style={{minHeight:"100vh"}}>
        {Data
          ? Data.map((items, index) => (
              <>
                <div
                  className="container my-3"
                  style={{
                    width: "600px",
                    boxShadow: "2px 2px 10px silver",
                    borderRadius: "10px",
                  }}
                >
                  <h5 className="my-2">{items.title}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={items.urlToImage}
                      alt="Image not found"
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">{items.content}</p>
                  <a href={items.url} target="_blank">
                    View More
                  </a>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default FetchData;
