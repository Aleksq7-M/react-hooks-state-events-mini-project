import React from "react";

function CategoryFilter({CATEGORIES, selectedCategory, onCategoryChange}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(category => {
      return (<button 
        className={selectedCategory===category ? 'selected' : null}
        key={category}
        onClick={onCategoryChange}
        >{category}</button>)
      })}
    </div>
  );
}

export default CategoryFilter;
