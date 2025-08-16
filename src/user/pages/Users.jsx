import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Angie Samson",
      image:
        "https://www.goodnite.com/wp-content/uploads/2020/03/Places-to-Visit-on-A-Road-Trip-Around-California.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
