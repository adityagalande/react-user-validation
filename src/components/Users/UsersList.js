import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.uName} ({user.uAge} years old )
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
