import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
    const [searchWord, setSearchWord] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(searchWord);
    }

    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="video-search">Enter the Video Name</label>
                    <input 
                        id="video-search" 
                        type="text" 
                        value={searchWord} 
                        onChange={(event) => setSearchWord(event.target.value)}
                        />
                </div>
            </form>
        </div>
    );

};


export default SearchBar;