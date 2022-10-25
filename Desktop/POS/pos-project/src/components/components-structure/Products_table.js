import "../components-style/Table.css";
import { useState, useEffect } from "react";
import { Button } from "./Reusable components/Button";

const Products_table = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log("useEffect executed");

    const getProducts = async () => {
      const userFromServer = await fetchProducts();
      setProducts(userFromServer);
    };

    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();

      return data;
    };

    getProducts();
  }, []);
  const removeProduct = (id) => {
    setProducts(products.filter((user) => user.id !== id));
  };
  const keys = ["title", "category"];
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
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {search(products).map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img src={product.thumbnail} />
              </td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <Button
                  text="Delete"
                  onClick={() => removeProduct(product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products_table;
