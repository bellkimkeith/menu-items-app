import { Checkbox, Dropdown, Label } from "flowbite-react";
import { useState } from "react";

function CategoriesList() {
  //get from database later
  const categoriesMock = ["Meal", "Snack", "Dessert"];
  const [categories, setCategories] = useState(categoriesMock);

  function handleCheckboxOnChange(category, isChecked, index) {
    console.log(category, isChecked, index);
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
              handleCheckboxOnChange(e.target.value, e.target.checked, index)
            }
          />
          <Label htmlFor={category}>{category}</Label>
        </div>
      </Dropdown.Item>
    ));

  return <DropdownItemList />;
}

export default CategoriesList;
