import "../components-style/Table.css";
import { useState, useContext } from "react";
import Pagination from "./Reusable components/Pagination";
import AddUserForm from "./Pop-Up/AddUserForm";
import { DataContext } from "../../DataBase/DataContext";
import Table_nav from "./Reusable components/Table_nav";
import EditUserForm from "./Pop-Up/EditUserForm";

const Users_table = () => {
  /*  Get the Data From DataContext */
  const { usersData, setUsersData } = useContext(DataContext);

  /* Variables used by Users Table */
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [openAdd, setOpenAdd] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [currentEditableUser, setCurrentEditableUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(false);
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
    setOpenRemove(false);
    setOpenEdit(false);
  };
  const openDeleteModule = () => {
    setOpenRemove(true);
    setOpenEdit(false);
  };
  const openEditModule = () => {
    setOpenRemove(false);
    setOpenEdit(true);
  };
  const isMale = (gender) => {
    return gender === "Male";
  };
  const handlerEditUser = (user, index) => {
    setCurrentEditableUser(user);
    setCurrentIndex(index);
    setOpenEditForm(true);
  };
  return (
    <div className="table-container">
      <nav className="table-nav">
        <Table_nav
          addButtonHandler={openAddModule}
          deleteButtonHandler={openDeleteModule}
          EditButtonHandler={openEditModule}
        />
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
            {openRemove && (
              <th>
                <i
                  class="fa-solid fa-check"
                  onClick={() => setOpenRemove(false)}
                ></i>
              </th>
            )}
            {openEdit && (
              <th>
                <i
                  class="fa-solid fa-check"
                  onClick={() => setOpenEdit(false)}
                ></i>
              </th>
            )}
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
                  <td>{user.discount_percentage} %</td>
                  {openRemove && (
                    <td>
                      <i
                        className="fa-solid fa-xmark delete-icon"
                        onClick={() => removeUser(user.id)}
                      ></i>
                    </td>
                  )}
                  {openEdit && (
                    <td>
                      <i
                        class="fa-solid fa-pen-to-square"
                        onClick={() =>
                          handlerEditUser(
                            user,
                            usersData.findIndex((u) => u.id === user.id)
                          )
                        }
                      ></i>
                    </td>
                  )}
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
      {openEditForm && (
        <EditUserForm
          Editable_user={currentEditableUser}
          setOppen={setOpenEditForm}
          userData={usersData}
          setUserData={setUsersData}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default Users_table;
