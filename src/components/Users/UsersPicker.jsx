import React from 'react';

const { users } = require("../../static.json");

const UsersPicker = () => {
  return (
    <select>
      {users.map(u => <option key={u.id}>{u.name}</option>)}
    </select>
  )
};

export default UsersPicker;
