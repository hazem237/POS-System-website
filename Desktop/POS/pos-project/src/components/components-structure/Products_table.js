import "../components-style/Table.css";
import { useState, useEffect, useContext } from "react";
import { Button } from "./Reusable components/Button";
import Pagination from "./Reusable components/Pagination";
import AddProductForm from "./Pop-Up/AddProductForm";
import { DataContext } from "../../DataBase/DataContext";
import Table_nav from "./Reusable components/Table_nav";
import EditProductForm from "./Pop-Up/EditProductForm";

const Products_table = () => {
  /*  Get the Data From DataContex */

  const { productsData, setProductsData } = useContext(DataContext);

  /* Variables used by Products Table */

  const [query, setQuery] = useState("");
  const keys = ["title", "category"];
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [openAdd, setOpenAdd] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [currentEditableProduct, setCurrentEditableProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(false);
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
  const handlerEditProduct = (product, index) => {
    setCurrentEditableProduct(product);
    setCurrentIndex(index);
    setOpenEditForm(true);
  };

  /* Return The Component */

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
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
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
          {(query.length > 2 ? search(productsData) : currentPosts).map(
            (product, index) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.thumbnail} />
                </td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                {openRemove && (
                  <td>
                    <i
                      className="fa-solid fa-xmark delete-icon"
                      onClick={() => removeProduct(product.id)}
                    ></i>
                  </td>
                )}
                {openEdit && (
                  <td>
                    <i
                      class="fa-solid fa-pen-to-square"
                      onClick={() => handlerEditProduct(product, index)}
                    ></i>
                  </td>
                )}
              </tr>
            )
          )}
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
      {openEditForm && (
        <EditProductForm
          setOppen={setOpenEditForm}
          Editable_product={currentEditableProduct}
          index={currentIndex}
          productsData={productsData}
          setProductsData={setProductsData}
        />
      )}
    </div>
  );
};

export default Products_table;
