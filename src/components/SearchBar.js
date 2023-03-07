import {useState} from 'react'
import useSearch from '../hooks/search-hook'
import { useHistory } from 'react-router-dom'
import Input from './Input'



// {props,searchArts, onChangeSearch}
function SearchBar({ data }){
    const history = useHistory()
    const [searchKey, setSearchKey] = useState("")
    const filteredData = useSearch(data, searchKey)
    
    const options = ['galleries', 'visits', 'arts', 'reviews', 'about'];

    const onOptionChangeHandler = (e) => {
        history.push((`/${e.target.value}`))
        console.log("User Selected Value-", e.target.value)
    }

    // const handleSearch = (e) => {
    //     fetch(`/arts/search`, {
    //         postReq,
    //         body: JSON.stringify(e.target)
    //     })
    //     .then(r => r.json())
    //     .then(search => {
    //         setSearchInput(searchInput)
    //     })
    //     console.log(searchInput)
    // }

    // const handleSearch = (e) => {
    //     setSearchInput(e.target)
    //     fetch(`/${e.target.value}/search`,{
    //         postReq, 
    //         body: JSON.stringify(e.target.value)
    //     })
    //     .then(r => r.json())
    //     .then(console.log(e.target.value))
    // }


    return (
    <div id="searchbar">
        <Input
            element='input'
            id='search'
            type='text'
            placeholder='Search'
            onInput={(e) => setSearchKey(e.target)}
            value={searchKey}
        />
        {/* {filteredData.map((item)=>(
            <div key={item.id}>{item.name}</div>
        ))} */}
        
            {/* <input
            type="text"
            id="search"
            placeholder="Search"
            onChange={handleSearch}
            value={searchArts}/>
            <br/> */}

            <select 
                onChange={onOptionChangeHandler}
                id='select'
            >
                <option>Select a Route</option>
                {options.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}
            </select>
        </div>
    )
}

export default SearchBar;