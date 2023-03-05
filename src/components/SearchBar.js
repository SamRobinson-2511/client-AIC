import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Input from './Input'



// {props,searchArts, onChangeSearch}
function SearchBar(searchArts, onChangeSearch, postReq){
    const history = useHistory()
    const [searchInput, setSearchInput] = useState("")

    
    
    const options = ['galleries', 'visits', 'arts', 'reviews'];

    const onOptionChangeHandler = (e) => {
        history.push((`/${e.target.value}/search`))
        console.log("User Selected Value-", e.target.value)
    }

    const handleSearch = (e) => {
        fetch(`/arts/search`, {
            postReq,
            body: JSON.stringify(e.target)
        })
        .then(r => r.json())
        .then(console.log)
    }

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
            onInput={handleSearch}
            value={searchInput}
        />
        
            
            
            
            
            
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