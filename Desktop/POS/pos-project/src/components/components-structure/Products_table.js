import "../components-style/Table.css";
import { useState, useEffect, useContext } from "react";
import { Button } from "./Reusable components/Button";
import Pagination from "./Reusable components/Pagination";
import AddProductForm from "./Pop-Up/AddProductForm";
import { DataContext } from "../../DataBase/DataContext";

const Products_table = () => {
  /*  Get the Data From DataContex */

  const { productsData, setProductsData } = useContext(DataContext);

  /* Variables used by Products Table */

  const [query, setQuery] = useState("");
  const keys = ["title", "category"];
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [openAdd, setOpenAdd] = useState(false);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productsData.slice(indexOfFirstPost, indexOfLastPost);

  /* Functions */

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
      <div className="table-nav">
        <Button
          text="Add Product"
          buttonStyle="btn--outline add"
          buttonSize="btn--small"
          onClick={() => openAddModule()}
        />
        <input
          type="text"
          placeholder="Search .. "
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

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
          {(query ? search(productsData) : currentPosts).map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img src={product.thumbnail} />
              </td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <i class="fa-light fa-xmark"></i>
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

      {openAdd && (
        <AddProductForm
          setOppen={setOpenAdd}
          productsData={productsData}
          setProductsData={setProductsData}
        />
      )}
    </div>
  );
};

export default Products_table;
