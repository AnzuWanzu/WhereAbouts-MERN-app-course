import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Angie Samson",
      image:
        "https://samson-portfolio-seven.vercel.app/static/media/About.9d8988b996192a539883.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
