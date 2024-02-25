"use client";

import { Checkbox, Dropdown, Label } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryFilter,
  categoriesList,
  filter,
  removeCategoryFilter,
} from "../../features/categories/categoriesSlice";

function CategoriesList() {
  const categories = useSelector(categoriesList);
  const categoryFilter = useSelector(filter);
  const dispatch = useDispatch();

  function checkHandler(isChecked, category) {
    if (isChecked) {
      dispatch(addCategoryFilter(category));
    } else {
      dispatch(removeCategoryFilter(category));
    }
  }

  const DropdownItemList = () =>
    categories.map((category, index) => (
      <Dropdown.Item key={index}>
        <div className="space-x-2">
          <Checkbox
            id={category}
            className="dark:border-white"
            color="gray"
            checked={
              Object.values(categoryFilter).includes(category) ? true : false
            }
            onChange={(e) => checkHandler(e.target.checked, category)}
          />
          <Label htmlFor={category}>{category}</Label>
        </div>
      </Dropdown.Item>
    ));

  return <DropdownItemList />;
}

export default CategoriesList;
