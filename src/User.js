import React, { useEffect } from "react";
import Badge from "react-bootstrap/Badge";
const User = ({ user }) => {
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div align="left">
      <Badge variant="dark">User:</Badge>
      {user ? <h3>{user}</h3> : null}
    </div>
  );
};

export default User;
