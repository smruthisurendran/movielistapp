import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";

import { setSearchQuery } from "../../redux/movieSlice";
import { FONT_COLOR, SEARCH_MOVIES } from "../../core/utils/constant";
import "./SearchField.css";

const SearchField = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //Function to show and hide the search textfield
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      dispatch(setSearchQuery(""));
      setInputValue("");
    }
  };

  //Function to change the text in search field
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    dispatch(setSearchQuery(value));
  };

  return (
    <div className="search-container">
      {!showSearch ? (
        <IconButton onClick={handleSearchToggle} style={{ color: FONT_COLOR }}>
          <SearchIcon />
        </IconButton>
      ) : (
        <TextField
          fullWidth
          variant="outlined"
          value={inputValue}
          onChange={handleSearchChange}
          placeholder={SEARCH_MOVIES}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSearchToggle}
                  style={{ color: FONT_COLOR }}
                >
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          className="custom-placeholder"
        />
      )}
    </div>
  );
};

export default SearchField;
