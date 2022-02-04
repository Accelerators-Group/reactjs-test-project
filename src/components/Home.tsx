import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import RepoDetails from "./RepoDetails";
import Bookmark from './Bookmark';
import '../index.css';
import Header from './Header';

const Home = () => {
  const [username, setUsername] = useState("");  
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]); 
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);
  // const [cardData, setCardData] = useState([ {linkName: 'Repo 1', linkHref: 'https://github.com' }]);
  // console [newCard, setNewCard] = useState({ linkName: '', linkHref: '' });

  useEffect(() => {
    setRepos([]);
    setDetails([]);
  }, [username]);

  function strCompare(str1: any,str2: any){
    return str1 === str2 ;
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/users/${username}/repos`,
    }).then(res => {
      setLoading(false);
      setRepos(res.data);
    });
  }

  function renderRepo(repo: any) {

    if(strCompare(loading, "Searching...")) {
      return(
        <div className='row'>
          <h2 className='repo-name'>
            We couldn't able to find any user on the name of ${repo.name}
          </h2>
        </div>
      );
    } else {
      return(
        <div className='row' onClick={() => getDetails(repo.name)} key={repo.id}>
  
          <h2 className='repo-name'>
            {repo.name}
          </h2>
        </div>
      );
    }
  }

  function getDetails(repoName: any) {
    setDetailsLoading(true);
    axios({
      method: "get",
      url: `https://api.github.com/repos/${username}/${repoName}`,
    }).then(res => {
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }

  return (
    <div className='page'>
      <Header />
      <div className='landing-page-container'>
        <div className='left-side'>
        <div className='header'>
          <h2>Search Repository</h2>
        </div>
          <form className='form'>
            <input 
              className='input'
              value={username} 
              placeholder='GitHub Username'
              onChange={e => setUsername(e.target.value)} 
            />
            <button className='button' onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
          </form>
          <div className='results-container'>
            {repos.map(renderRepo)}
          </div>
        </div>
        <RepoDetails details={details} loading={detailsLoading}  />
     </div>
    </div>

  );
}

export default Home;
