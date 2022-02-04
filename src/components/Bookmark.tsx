import React from "react";
import { useState } from "react";

const Bookmark = (props: any) => {

    
    
    const [searchInput, setSearchInput] = useState('') //get the search input
   // { console.log("books are 3", props.location.state.results.bookmark) }
   

    let listBookmark = props.location.state.results.bookmark !== 0 ? (
        props.location.state.results.bookmark.map((list:any) => <li key={list.id}>{list}</li>)) : (
        <li>No bookmarks Added</li>
    )


    const handleClick = () =>{
    }
    return (
        <div className="p-6 max-w-sm mx-auto bg-emerald-200 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
            </div>
            <div>
                        <input className="p-1" type="text"
                            placeholder="Search Repos"
                            
                            onChange={(
                                ev: React.ChangeEvent<HTMLInputElement>,
                            ): void => setSearchInput(ev.target.value)} //on key change by getting target value
                        />
                        <button className="bg-black text-white p-1" onClick={handleClick}>Search</button>
                    </div>
            <div>
                {listBookmark}
            </div>
        </div>
    )
}

export default Bookmark;