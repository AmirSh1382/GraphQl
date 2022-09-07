import React from "react";

// GraphQl
import { useLazyQuery } from "@apollo/client";

// Queries
import { GET_USER } from "../graphql/queries";

const GetUserOnClick = () => {
  const [getUser, { loading, data, error }] = useLazyQuery(GET_USER,{
    variables: {id: 7}
  });

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={getUser}>Get user</button>

      {loading && <div>Loading ...</div>}

      {error && <div>Sth went wrong ....</div>}

      {data && (
        <div>
          <div>{data.user.id}</div>
          <h3>{data.user.name}</h3>
          <div>{data.user.username}</div>
          <div>{data.user.email}</div>
          <div>{data.user.phone}</div>
        </div>
      )}
    </div>
  );
};

export default GetUserOnClick;
