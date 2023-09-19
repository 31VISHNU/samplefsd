import React, { useState } from "react";
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
    item.name.includes(searchTerm)
  );

  return (
    <div class="input" align="center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        align="center"
      />
      {filteredData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default SearchFilter;