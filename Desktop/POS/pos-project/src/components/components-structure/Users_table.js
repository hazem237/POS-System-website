import "../components-style/Table.css";

const Users_table = ({ usersData }) => {
  return (
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
        {usersData.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.Subscription_date}</td>
            <td>{user.discount_percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users_table;
