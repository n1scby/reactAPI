import React from 'react';

const searchBox = (props) => {
    return (
        <div id="search-div">
            <form onSubmit={props.submit}>
                <label id="search-label">Search</label>
                <input id="search-input" type="text" value={props.search} onChange={props.change}/>
                <button type="submit" id="search-button" >Submit</button>
            </form>
        </div>
    )
}


export default searchBox;

