import React from "react";

// GraphQl
import { useQuery } from "@apollo/client";

// Queries
import { GET_USER } from "../graphql/queries";

const GetUser = () => {
  const { loading, data, error } = useQuery(GET_USER ,{
    variables: {id: 5}
  });

  if (loading) return "Loading ...";

  if (error) return "Sth went wrong ...";

  return (
    <div style={{ textAlign: "center" }}>
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

export default GetUser;