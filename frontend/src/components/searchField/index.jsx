import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./styleSheet.module.css";

const SearchField = () =>{
    return (
        <div className={style.inputContainer}>
          <div className={style.searchBox}>
            <SearchIcon className={style.searchIcon} />
            <input
              className={style.textField}
              id="searchInput"
              type="text"
              placeholder="Search"
              aria-label="Search here"
            />
            
          </div>
        </div>
      );
}

export default SearchField;