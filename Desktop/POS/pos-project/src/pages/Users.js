import React from "react";
import Users_table from "../../src/components/components-structure/Users_table";
import Navbar from "../components/components-structure/Reusable components/NavBar";

const Users = ({userData}) => {
  return (
    <div>
      <Navbar />
      <Users_table usersData={userData} />
    </div>
  );
};

export default Users;
