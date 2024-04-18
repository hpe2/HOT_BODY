import React from "react";
import { useUserContext } from "../../context/AuthContext";


const WroteTable = () => {
  const {user} = useUserContext();
  
  return (
    <>
      <table>
        <thead>
          <tr>카테고리</tr>
          <tr>카테고리</tr>
          <tr>카테고리</tr>
        </thead>
        <tbody>
          {user && user.map(({ name, userid, email }) => (
            <tr key={name + userid + email}>
              <td>{name}</td>
              <td>{userid}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    </>
  );
}

export default WroteTable;