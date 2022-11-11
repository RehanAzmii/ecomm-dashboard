import axios from "axios";
import React, { useState } from "react";

const SearchImage = () => {
  const [photo, setPhoto] = useState("");
  const getPhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=4UhQL7IdZ55_AGB`
      )
      .then((res) => {});
  };
  return (
    <>
      <div className="container text-crnter my-5">
        <input
          type="text"
          className="form-control"
          value={photo}
          placeholder="Search images"
          onChange={(e) => setPhoto(e.target.value)}
        ></input>
        <button
          type="submit"
          onClick={getPhoto}
          className="btn btn-primary my-3"
        >
          Search Image
        </button>
      </div>
    </>
  );
};

export default SearchImage;
