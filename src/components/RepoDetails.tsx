import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function RepoDetails(props: any) {
  const { details, loading } = props;
  const [myArray, setMyArray] = useState<any[]>([]);

  if (loading) {
    return <h1 className="loader">Loading...</h1>;
  }

  function addRepo(repo: any) {
    setMyArray([...myArray, {
      repo
    }]);
  }
  
  return (
    <div className="repo-details-container">
      <div className="details-row">
        <label className="label">Name: </label>
        <span className="value">{details.name}</span>
      </div>
      <div className="details-row">
        <label className="label">Forks Count: </label>
        <span className="value">{details.forks}</span>
      </div>
      <div className="details-row">
        <label className="label">Language: </label>
        <span className="value">{details.language}</span>
      </div>
      <div className="details-row">
        <label className="label">Starts: </label>
        <span className="value">{details.stargazers_count}</span>
      </div>
      
      <div className="details-row">
        <button
          type="button"
          onClick={() => addRepo(details)}>
          Bookmark
        </button>
      </div>
        <Link to={{
        pathname: '/Bookmark',
        state: {
          results: {myArray}
        }
      }}>
      <br />  

      {console.log(myArray)}
      <div>
      <button type="button" className="button-add" >
        Go to Bookmark Page
      </button>
    </div>
    </Link>
      {/* <Bookmark data={myArray}/> */}
    </div>
  );
}

export default RepoDetails;
