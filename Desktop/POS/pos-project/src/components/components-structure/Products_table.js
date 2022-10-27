import "../components-style/Table.css";
import { useState, useEffect } from "react";
import { Button } from "./Reusable components/Button";
import ReactPaginate from "react-paginate";
import Pagination from "./Reusable components/Pagination";
import AddProductForm from "./Pop-Up/AddProductForm";

const Products_table = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const keys = ["title", "category"];
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
 const [openAdd, setOpenAdd] = useState(false);
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

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openAddModule = () => {
    setOpenAdd(true);
  };

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
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {search(currentPosts).map((product) => (
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
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
      <Button
        text="Add Product"
        buttonStyle="btn--outline add"
        buttonSize="btn--small"
        onClick={() => openAddModule()}
      />
      {openAdd && (
        <AddProductForm
          setOppen={setOpenAdd}
          userData={products}
          setUserData={setProducts}
        />
      )}
    </div>
  );
};

export default Products_table;
