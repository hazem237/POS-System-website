import "../components-style/Table.css";
import { Button } from "./Reusable components/Button";
import { useState, useEffect, useContext } from "react";
import Pagination from "./Reusable components/Pagination";
import AddUserForm from "./Pop-Up/AddUserForm";
import { DataContext } from "../../DataBase/DataContext";

const Users_table = () => {
  /*  Get the Data From DataContext */

  const { usersData, setUsersData } = useContext(DataContext);

  /* Variables used by Users Table */

  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [openAdd, setOpenAdd] = useState(false);
  const keys = ["first_name", "last_name", "phone", "Subscription_date"];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = usersData.slice(indexOfFirstPost, indexOfLastPost);

  /* Functions  */

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

  const isMale = (gender) => {
    return gender === "Male";
  };
  /* Return The Component */

  return (
    <div className="table-container">
      <nav className="table-nav">
        <div className="table-nav-buttons-container">
          <Button
            text="Add"
            buttonStyle="btn--outline add"
            buttonSize="btn--small"
            onClick={() => openAddModule()}
          />
          <Button
            text="Delete "
            buttonStyle="btn--outline"
            buttonSize="but--small"
          />
          <Button
            text="Edit "
            buttonStyle="btn--outline"
            buttonSize="but--small"
          />
        </div>
        <div className="search-div-container">
          <input
            type="text"
            placeholder="Search .. "
            className="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </nav>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Subscription Date</th>
            <th>Discount percentage</th>
          </tr>
        </thead>
        <tbody>
          {usersData.length != 0 ? (
            (query.length > 2 ? search(usersData) : currentPosts).map(
              (user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td className="gender-warper">
                    <div
                      className={`${
                        isMale(user.gender) ? "male-blue" : "female-pink"
                      }`}
                    >
                      {user.gender}
                    </div>
                  </td>
                  <td>{user.Subscription_date}</td>
                  <td>{user.discount_percentage}</td>
                  <td>
                    <i
                      className="fa-solid fa-xmark delete-icon"
                      onClick={() => removeUser(user.id)}
                    ></i>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="6"> No Users</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={usersData.length}
        paginate={paginate}
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
