// import React from "react";

// GraphQl
import { useMutation } from "@apollo/client";

// Mutations
import { UPDATE_USER } from "../graphql/mutations";

const UpdateUser = () => {
  const [updateUser, { loading, data, error }] = useMutation(UPDATE_USER, {
    variables: { name: "Ali", username: "Ali03125" },
  });

  console.log({ loading, data, error });

  return (
    <div>
      <button onClick={updateUser}>updateUser</button>
    </div>
  );
};

export default UpdateUser;
