import "../components-style/Table.css";
import { Button } from "./Reusable components/Button";
import { useState, useEffect } from "react";

const Users_table = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("useEffect executed");
    const getUsers = async () => {
      const userFromServer = await fetchUsers();
      setUsers(userFromServer);
    };

    const fetchUsers = async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();

      return data;
    };

    getUsers();
  }, []);

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const keys = ["first_name", "last_name", "phone", "Subscription_date"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div>
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
          {search(users).map((user) => (
            <tr key={user.id}>
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
    </div>
  );
};

export default Users_table;
