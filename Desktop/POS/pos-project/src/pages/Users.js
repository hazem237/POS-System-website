import React from "react";
import Users_table from "../components/components-structure/Pages Components/Users Page Components/UsersTable";
import Navbar from "../components/components-structure/Reusable components/NavBar";

const Users = ({ userData }) => {
  return (
    <div className="User-page">
      <Navbar />
      <Users_table usersData={userData} />
    </div>
  );
};

export default Users;
