import React from "react";

const UserDataInput = ({ dataName, type, value, setState }) => {
  return (
    <div className="inputNote">
      <span>{dataName}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default UserDataInput;
