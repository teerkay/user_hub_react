import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [userList, setUserList] = useState([]);

  // this is new
  useEffect(() => {
    getUsers()
      .then((users) => {
        setUserList(users);
      })
      .catch((error) => {
        // something something errors
      });
  }, []);

  return (
    <div id="App">
      <Header userList={userList} />
    </div>
  );
};

import { getUsers } from "./api";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Header } from "./components";

const App = () => {
  const [userList, setUserList] = useState([]);

  return (
    <div id="App">
      <Header userList={userList} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
