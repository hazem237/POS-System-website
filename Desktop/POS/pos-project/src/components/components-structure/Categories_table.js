import '../components-style/Table.css'

const Categories_table = ({ categoriesData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {categoriesData.map((category) => (
          <tr>
            <td>{category.category}</td>
            <td>
              <img src={category.image} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Categories_table;
