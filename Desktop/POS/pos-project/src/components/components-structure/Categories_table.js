import "../components-style/Table.css";
import { useState, useEffect, useContext } from "react";
import { Button } from "./Reusable components/Button";
import Pagination from "./Reusable components/Pagination";
import AddCategoryForm from "./Pop-Up/AddCategoryForm";
import { DataContext } from "../../DataBase/DataContext";

const Categories_table = () => {
  /* Get Categories from DataContex */

  const { categoriesData, setCategoriesData } = useContext(DataContext);

  /* The Variables used By Category Table */

  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const UpdateData = () => {
    console.log(categoriesData);
    setCategoriesData(localStorage.getItem(JSON.stringify("categories")));
    console.log(categoriesData);
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
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {(query ? search(categoriesData) : currentPosts).map((category) => (
            <tr>
              <td>{category.category}</td>
              <td>
                <img src={category.image} />
              </td>
              <td>
                <Button
                  onClick={() => removeCategories(category.category)}
                  text="Delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={categoriesData.length}
        paginate={paginate}
      />
      <Button
        text="Add category "
        buttonStyle="btn--outline"
        buttonSize="but--small"
        onClick={() => setOpenForm(true)}
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
