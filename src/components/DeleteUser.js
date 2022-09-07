import React from "react";

// GraphQl
import { useMutation } from "@apollo/client";

// Mutations
import { DELETE_USER } from "../graphql/mutations";

const DeleteUser = () => {
  const [deleteUser, { loading, data, error }] = useMutation(DELETE_USER, {
    variables: { id: 5 },
  });

  console.log({ loading, data, error });

  return (
    <div>
      <button onClick={deleteUser}>delete user</button>
    </div>
  );
};

export default DeleteUser;
