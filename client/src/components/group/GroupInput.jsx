import React from "react";

const GroupInput = ({ value, setValue, text, type }) => {
  return (
    <div className={`group-creation-input ${type && 'group-description'}`}>
      <p>{text}</p>
      {type ? (
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      ): (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      )}
    </div>
  );
};

export default GroupInput;
