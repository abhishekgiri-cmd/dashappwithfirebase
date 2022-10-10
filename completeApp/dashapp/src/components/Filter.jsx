import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const handleChange = (e) => {
    const option = e.target.value;
    let myNewCategoryOptions = [...category];
    if (category.includes(option)) {
      myNewCategoryOptions.splice(myNewCategoryOptions.indexOf(option), 1);
    } else {
      myNewCategoryOptions.push(option);
    }
    setCategory(myNewCategoryOptions);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({ category });
    }
  }, [category, setSearchParams]);
  return (
    <div
      style={{
        border: "1px solid teal",
        borderRadius: "5px",
        marginLeft: "10px",
        marginRight: "20px",
        marginBottom: "20px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Filters</h3>
      <div style={{ padding: " 10px", fontSize: "20px" }}>Category</div>
      <div style={{ paddingLeft: "15px" }} data-testid="filter-category">
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="oxygen"
            checked={category.includes("oxygen")}
          />
          <label htmlFor="">oxygen</label>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="checkbox"
            value="temperature"
            checked={category.includes("temperature")}
          />
          <label htmlFor="">temperature</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
