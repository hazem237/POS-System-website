import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "../../../../DataBase/DataContext";
import Pagination from "../../Reusable components/Pagination";
import "../../../components-style/Products_Gallery.css";

const CategoriesBar = ({ searchQuery, handleCategoryClicked }) => {
    /* Get Data */
  const { categoriesData } = useContext(DataContext);
  
  const categoryKey = ["category"];
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  const [categoryPerPage] = useState(6);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastCategory = currentPage * productPerPage;
  const indexOfFirstCategory = indexOfLastCategory - productPerPage;
  const currentCategory = categoriesData.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );
  const searchForCategory = (data) => {
    return data.filter((item) =>
      categoryKey.some((key) => item[key].toLowerCase().includes(searchQuery))
    );
  };

  console.log(handleCategoryClicked);
  return (
    <div>
      <div className="categories-container">
        {(searchQuery.length > 2
          ? searchForCategory(categoriesData)
          : currentCategory
        ).map((category, index) => (
          <div className="productContainer" key={index}>
            <img src={category.image} className="gallery-img" />
            <div
              className="overlay"
              onClick={() => handleCategoryClicked(category.category)}
            >
              <div className="content">
                <h3>{category.category}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        postsPerPage={categoryPerPage}
        totalPosts={categoriesData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default CategoriesBar;
