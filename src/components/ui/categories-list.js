import { Checkbox, Dropdown, Label } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function CategoriesList() {
  // temporary data, fetch on database later
  const categories = ["Meal", "Snack", "Dessert"];
  const dispatch = useDispatch();

  function handleCheckboxOnChange(category, isChecked) {
    console.log(category, isChecked);
  }

  const DropdownItemList = () =>
    categories.map((category, index) => (
      <Dropdown.Item key={index}>
        <div className="space-x-2">
          <Checkbox
            id={category}
            className="dark:border-white"
            color="gray"
            value={category}
            onChange={(e) =>
              handleCheckboxOnChange(e.target.value, e.target.checked)
            }
          />
          <Label htmlFor={category}>{category}</Label>
        </div>
      </Dropdown.Item>
    ));

  return <DropdownItemList />;
}

export default CategoriesList;
