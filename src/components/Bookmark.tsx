import "../index.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

const Bookmark = (props: any) => {
  const data = props.location.state.results.myArray;
  const [searchRepo, setSearchRepo] = useState("");

  return (
    <div className="page">
      <Header />
      <div className="landing-page-container">
        <div className="left-side-bookmark">
          <div className="header">
            <h2>Bookmark Repository List</h2>
          </div>
          <form className="form">
            <input
              className="input"
              placeholder="Search repository..."
              onChange={event => {setSearchRepo(event.target.value)}}
            />
          </form>
          <div className="list" key="key">
            {data.filter(val => {
              if(searchRepo == "" ) {
                return val
              } else if (val.repo.html_url.toLowerCase().includes(searchRepo.toLowerCase())) {
                return val
              }
            }).map((item) => (
              <p>{item.repo.html_url}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
