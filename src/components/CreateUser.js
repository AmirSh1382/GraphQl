import React from "react";

// GraphQl
import { useMutation } from "@apollo/client";

// Mutations
import { CREATE_USER } from "../graphql/mutations";

const CreateUser = () => {
  const [createUser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: {
        name: "Ali",
        username: "Ali0213",
        email: "Ali@gmail.com",
      },
    }
  );

  console.log({ loading, data, error, called });

  return (
    <div>
      <button onClick={createUser}>Create user</button>
    </div>
  );
};

export default CreateUser;
