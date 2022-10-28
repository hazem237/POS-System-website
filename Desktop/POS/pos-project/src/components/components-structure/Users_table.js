import "../components-style/Table.css";
import { Button } from "./Reusable components/Button";
import { useState, useEffect, useContext } from "react";
import Pagination from "./Reusable components/Pagination";
import AddUserForm from "./Pop-Up/AddUserForm";
import { DataContex } from "../../DataBase/DataContex";

const Users_table = () => {
  /* The Variables used By User Table */
  // const value = JSON.parse(localStorage.getItem("users"));
  // const [users, setUsers] = useState([]);
  const { usersData, setUsersData } = useContext(DataContex);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [openAdd, setOpenAdd] = useState(false);
  const keys = ["first_name", "last_name", "phone", "Subscription_date"];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = usersData.slice(indexOfFirstPost, indexOfLastPost);

  const removeUser = (id) => {
    setUsersData(usersData.filter((user) => user.id !== id));
  };

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const openAddModule = () => {
    setOpenAdd(true);
  };

  /* Return The Component */

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search .. "
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Subscription Date</th>
            <th>Discount percentage</th>
          </tr>
        </thead>
        <tbody>
          {search(currentPosts).map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.Subscription_date}</td>
              <td>{user.discount_percentage}</td>
              <td>
                <Button text="Delete" onClick={() => removeUser(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={usersData.length}
        paginate={paginate}
      />
      {/* <button onClick={() => add()}>Add</button> */}
      <Button
        text="Add User"
        buttonStyle="btn--outline add"
        buttonSize="btn--small"
        onClick={() => openAddModule()}
      />
      {openAdd && (
        <AddUserForm
          setOppen={setOpenAdd}
          userData={usersData}
          setUserData={setUsersData}
        />
      )}
    </div>
  );
};

export default Users_table;
