import "../../../components-style/Table.css";
import { useState, useContext } from "react";
import Pagination from "../../Reusable components/Pagination";
import AddCategoryForm from "../../Pop-Up/AddCategoryForm";
import { DataContext } from "../../../../DataBase/DataContext";
import Table_nav from "../../Reusable components/TableNav";
import EditCategoryForm from "../../Pop-Up/EditCategoryForm";

const Categories_table = () => {
  /* Get Categories from DataContex */

  const { categoriesData, setCategoriesData } = useContext(DataContext);

  /* The Variables used By Category Table */

  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [openAdd, setOpenAdd] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const keys = ["category"];
  const [openEditForm, setOpenEditForm] = useState(false);
  const [currentEditableCategory, setCurrentEditableCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(false);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = categoriesData.slice(indexOfFirstPost, indexOfLastPost);

  /* Functions  */

  const removeCategories = (category) => {
    setCategoriesData(categoriesData.filter((c) => c.category !== category));
  };

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
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
  const handlerEditCategory = (category, index) => {
    setCurrentEditableCategory(category);
    setCurrentIndex(index);
    setOpenEditForm(true);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <th>Category</th>
            <th>Image</th>
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
          {categoriesData.length != 0 ? (
            (query.length > 2 ? search(categoriesData) : currentPosts).map(
              (category, index) => (
                <tr>
                  <td>{category.category}</td>
                  <td>
                    <img src={category.image} />
                  </td>
                  {openRemove && (
                    <td>
                      <i
                        className="fa-solid fa-xmark delete-icon"
                        onClick={() => removeCategories(category.category)}
                      ></i>
                    </td>
                  )}
                  {openEdit && (
                    <td>
                      <i
                        class="fa-solid fa-pen-to-square"
                        onClick={() =>
                          handlerEditCategory(
                            category,
                            categoriesData.findIndex(
                              (c) => c.category === category.category
                            )
                          )
                        }
                      ></i>
                    </td>
                  )}
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

      {openAdd && (
        <AddCategoryForm
          setOppen={setOpenAdd}
          categoriesData={categoriesData}
          setCategoriesData={setCategoriesData}
        />
      )}
      {openEditForm && (
        <EditCategoryForm
          setOppen={setOpenEditForm}
          categoriesData={categoriesData}
          setCategoriesData={setCategoriesData}
          Editable_category={currentEditableCategory}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default Categories_table;
