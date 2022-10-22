import "../components-style/Table.css";

const Products_table = ({ productsData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsData.map((product) => (
          <tr>
            <td>{product.id}</td>
            <td>
              <img src={product.thumbnail} />
            </td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products_table;
