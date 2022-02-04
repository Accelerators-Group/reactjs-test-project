
import React, { useState } from "react";
import Results from "./Results";
import axios from 'axios';
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('') //get the search input
    const [repos, setRepos] = useState('') // to store and get the api data

    //search input and assing value to repo after click event using useStata
    const handleClick = async () => {
        const BASE_URL = "https://api.github.com";


        const getUserGithubRepos = async (username: any) => {
            const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
            return await axios.get(url);
        };

        const result = (await getUserGithubRepos(searchInput)).data

        setRepos(result);

    }
    return (

        <div className="flex p-6">
            <div className="p-4 bg-sky-500/50 rounded-xl shadow-lg items-center">
                <div className="shrink-0">
                </div>
                <div>
                    <div>
                        <input className="p-1" type="text"
                            placeholder="Search UserName"
                            value={searchInput}
                            onChange={(
                                ev: React.ChangeEvent<HTMLInputElement>,
                            ): void => setSearchInput(ev.target.value)} //on key change by getting target value
                        />
                        <button className="bg-black text-white p-1" onClick={handleClick}>Search</button>
                    </div>
                </div>

            </div>
            <div className="p-6  mx-auto bg-emerald-200 rounded-xl shadow-lg items-center">
                <div className="shrink-0">
                </div>
                <div>
                    <div className="p-1 text-xl font-large font-bold text-sky-500/100">Result</div>
                    <p className="text-slate-500"><Results repos={repos} /></p>
                </div>
            </div>
        </div>
        //passing prop to result as repos
    )
};

export default SearchBar;