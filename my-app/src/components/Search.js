import React, { useState } from 'react';

const Search = (props) => {

    const [searchVal, setSearchVal] = useState("");

    // handle search change
    const handleSearch = (e) => {
        setSearchVal(e.target.value);
    }

    // reset feild input
    const resetInputField = () => {
        setSearchVal("");
    }

    // actual search function
    const callSearch = (e) => {
        e.preventDefault();
        props.search(searchVal);
        resetInputField();
    }

    return (
        <form className="search-bar">
            <input
                type="text"
                value={searchVal}
                onChange={handleSearch}
            />
            <input onClick={callSearch} type="submit" value="SEARCH" />
        </form>

    )
}

export default Search;