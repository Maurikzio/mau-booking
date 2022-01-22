import { useState } from "react";

const { users } = require("../../static.json");

const UsersList = () => {
  
  const [selectedUser, setSelectedUser] = useState(1);

  const handleUserSelection = (selectedIndex) => {
    setSelectedUser(selectedIndex)
  }

  return (
    <ul className="items-list-nav">
      {users.map((u, i) => (
        <li key={u.id} className={i === selectedUser ? "selected" : null}>
          <button className="btn" onClick={() => handleUserSelection(i)}>{u.name}</button>
        </li>
      ))}
    </ul>
  )
};

export default UsersList;
