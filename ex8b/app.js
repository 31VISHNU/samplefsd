import React, { useState } from "react";
//import './App.css'
const data = [
  { id: 1, name: "ABC" },
  { id: 2, name: "VISHNU" },
  { id: 3, name: "Raina" },
  { id: 4, name: "Cricket" },
  { id: 5, name: "Virat" },
  { id: 6, name: "Virudhunagar" }
];

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div class="input">
      <input
        type="text"
        placeholder="Enter the intput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default SearchFilter;