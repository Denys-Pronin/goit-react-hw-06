import React from "react";

const SearchBox = ({ func, value }) => {
  return (
    <label>
      <input onChange={func} type="text" value={value} />
    </label>
  );
};

export default SearchBox;
