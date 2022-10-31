import "../components-style/Table.css";
import { useState, useContext } from "react";
import Pagination from "./Reusable components/Pagination";
import AddCategoryForm from "./Pop-Up/AddCategoryForm";
import { DataContext } from "../../DataBase/DataContext";
import Table_nav from "./Reusable components/Table_nav";

const Categories_table = () => {
  /* Get Categories from DataContex */

  const { categoriesData, setCategoriesData } = useContext(DataContext);

  /* The Variables used By Category Table */

  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [openForm, setOpenForm] = useState(false);
  const keys = ["category"];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = categoriesData.slice(indexOfFirstPost, indexOfLastPost);

  /* Functions  */

  const removeCategories = (category) => {
    setCategoriesData(categoriesData.filter((c) => c.category !== category));
    localStorage.setItem("categories", JSON.stringify(categoriesData));
  };

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  const openAddModule = () => {
    setOpenForm(true);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /* Return The Component */

  return (
    <div className="table-container">
      <nav className="table-nav">
        <Table_nav addButtonHandler={openAddModule} />
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
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {categoriesData.length != 0 ? (
            (query.length > 2 ? search(categoriesData) : currentPosts).map(
              (category) => (
                <tr>
                  <td>{category.category}</td>
                  <td>
                    <img src={category.image} />
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-xmark delete-icon"
                      onClick={() => removeCategories(category.category)}
                    ></i>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="3">No Categories</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={categoriesData.length}
        paginate={paginate}
      />

      {openForm && (
        <AddCategoryForm
          setOppen={setOpenForm}
          categoriesData={categoriesData}
          setCategoriesData={setCategoriesData}
        />
      )}
    </div>
  );
};

export default Categories_table;
