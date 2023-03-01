import React from 'react';

function SearchBar({searchArts, onChangeSearch}){

    function handleChange(e){
        e.preventDefault();
        onChangeSearch(e.target.value)
        fetch(`/`)
    }


    return (
        <div className="searchbar">
            <input
            type="text"
            id="search"
            placeholder="Search Arts"
            onChange={handleChange}
            value={searchArts}/>
        </div>
    )
}

export default SearchBar;