import React from "react";
import { useState } from "react";
import Bookmark from "./Bookmark";
import { Link } from "react-router-dom";

const Results = (props: any) => {
    //get and store the api data
    const { repos } = props;

    //set state to save bookmark in string array
    const [bookmark, setBookmark] = useState<any[]>([])

    function addBookmark(name: any) {

        setBookmark((bookmarks) => [
            ...bookmarks,
            name,
        ]);
    }

    console.log("my list",bookmark);
    //list and fetch the data
    const listRepos = repos.length !== 0 ? (
        repos.map((item: any) => <li key={item.id}> {item.name}<button onClick={() => addBookmark(item.name)} className="text-2xl hover:text-red-600">  +  </button></li>)
    ) : (<li>No Repos Searched</li>);

    //list and fetch book mark list
    let listBookmark = bookmark.length !== 0 ? (
        bookmark.map((list:any) => <li key={list.id}>{list}</li>)) : (
        <li>No bookmarks Added</li>
    )


    return (
        //display the list
        <div>
            <ul className="list-none md:list-disc">
                <h1 className="font-medium text-black-bold">List of Repos</h1>
                <li className="text-x1 text-black">
                    {listRepos}
                </li>
            </ul>
            <ul className="list-none md:list-disc">
                <h1 className="font-medium text-black-bold">List of Bookmark</h1>
                
                    <Link
                        to={
                            {
                                pathname:"/Bookmark",
                                state:{results:{bookmark}},
                            }
                        }
                    >
                        <button className="bg-black text-white p-1">Check Bookmark</button>
                       
                    </Link>

               
            </ul>

        </div>

    )
};

export default Results;

