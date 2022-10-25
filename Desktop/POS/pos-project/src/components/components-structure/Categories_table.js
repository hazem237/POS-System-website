import "../components-style/Table.css";
import { useState, useEffect } from "react";
import { Button } from "./Reusable components/Button";

const Categories_table = () => {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const userFromServer = await fetchCategories();
      setCategories(userFromServer);
    };

    const fetchCategories = async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();

      return data;
    };

    getCategories();
  }, []);
  const removeCategories = (category) => {
    setCategories(categories.filter((c) => c.category !== category));
  };
  const keys = ["category"];
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
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {search(categories).map((category) => (
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
    </div>
  );
};

export default Categories_table;
