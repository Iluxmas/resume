import React, { useState } from "react";

export default function FilterBar({ tags, onSelect }) {
  const [selectedTag, setSelectedTag] = useState("all");

  function handleChoose(event) {
    const tag = event.target.innerHTML;
    setSelectedTag(tag);
    onSelect(tag);
  }

  let classDefault = "gallery__control-item";
  let classSelected = "gallery__control-item gallery__control-item-selected";

  return (
    <>
      {tags.length > 0 &&
        tags.map((item, idx) => {
          const isSelected = item === selectedTag;
          return (
            <li
              className={isSelected ? classSelected : classDefault}
              key={idx}
              onClick={handleChoose}
            >
              {item}
            </li>
          );
        })}
    </>
  );
}
