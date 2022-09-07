import React from "react";

// GraphQl
import { useQuery } from "@apollo/client";

// Queries
import { GET_ALL_USERS } from "../graphql/queries";

const GetUsers = () => {
  const { loading, data, error } = useQuery(GET_ALL_USERS);

  if (loading) return "Loading ...";

  if (error) return "SomeThing went wrong...";

  return (
    <div>
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

export default GetUsers;
