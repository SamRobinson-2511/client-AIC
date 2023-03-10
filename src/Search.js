import React from "react";

export default function Search({search, setSearch}){


  return (
    <div className="search">
    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for ..."></input>
    </div>
    );
}