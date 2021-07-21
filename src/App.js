import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList((previousUser) => {
      return [...previousUser, { uName, uAge, id: Math.random().toString() }];
    });
  };
  return (
    // This (React.Fragment) is alternat Option to write the root Tag element like (Wrapper). It reduce un-essential HTML elements. 
    <React.Fragment>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
