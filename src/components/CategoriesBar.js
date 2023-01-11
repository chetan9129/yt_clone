import React, { useState } from "react";
import "../css/categoriesbar.css";

const keywords = [
  { id: 1, name: "All" },
  { id: 2, name: "Gaming" },
  { id: 3, name: "Live" },
  { id: 4, name: "Valorant" },
  { id: 5, name: "Mixes" },
  { id: 6, name: "Music" },
  { id: 7, name: "Game Shows" },
  { id: 8, name: "Comedy" },
  { id: 9, name: "Indian Pop Music" },
  { id: 10, name: "Cooking Shows" },
  { id: 11, name: "Tanmay Bhat" },
  { id: 12, name: "Computer Programing" },
  { id: 13, name: "Filmi" },
  { id: 14, name: "Counter-Strike" },
  { id: 15, name: "Cricket" },
  { id: 16, name: "Chill-Out Music" },
  { id: 17, name: "Computer Hardware" },
  { id: 18, name: "Chill-Out Music" },
];

const CategoriesBar = () => {
  const [activeElement, setactiveElement] = useState("All");
  const handleClick = (value) => {
    setactiveElement(value);
  };

  return (
    <div className="CategoriesBar">
      {keywords.map((value) => (
        <span
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
          key={value.id}
        >
          {value.name}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
