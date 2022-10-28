import "../components-style/Table.css";
import { useState, useEffect, useContext } from "react";
import { Button } from "./Reusable components/Button";
import Pagination from "./Reusable components/Pagination";
import AddProductForm from "./Pop-Up/AddProductForm";
import { DataContex } from "../../DataBase/DataContex";

const Products_table = () => {
  /* The Variables used By User Table */
  // const value = JSON.parse(localStorage.getItem("products"));
  // const [products, setProducts] = useState(value);
  const { productsData, setProductsData } = useContext(DataContex);
  const [query, setQuery] = useState("");
  const keys = ["title", "category"];
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [openAdd, setOpenAdd] = useState(false);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productsData.slice(indexOfFirstPost, indexOfLastPost);

  

  /* Functions Used By Products Table */

  const removeProduct = (id) => {
    setProductsData(productsData.filter((user) => user.id !== id));
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
        totalPosts={productsData.length}
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
          userData={productsData}
          setUserData={setProductsData}
        />
      )}
    </div>
  );
};

export default Products_table;
