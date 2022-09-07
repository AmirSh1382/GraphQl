import React from "react";

// Queries
import { GET_ALL_USERS } from "../graphql/queries";

// GraphQl
import { useLazyQuery } from "@apollo/client";

const GetUsersOnClick = () => {
  const [getAllUsers, { loading, data, error }] = useLazyQuery(GET_ALL_USERS);

  return (
    <div>
      <button onClick={getAllUsers}>get all users</button>

      {loading && "Loading ..."}

      {error && "Sth went wrong ..."}

      {data &&
        data.users.data.map((user) => {
          return (
            <div key={user.id} style={{ textAlign: "center", margin: "50px" }}>
              <div>{user.id}</div>
              <h3>{user.name}</h3>
              <div>{user.username}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
            </div>
          );
        })}
    </div>
  );
};

export default GetUsersOnClick;
