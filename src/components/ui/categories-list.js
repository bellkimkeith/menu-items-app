import { Checkbox, Dropdown, Label } from "flowbite-react";
import { useSelector } from "react-redux";
import { categoriesList } from "../../features/categories/categoriesSlice";

function CategoriesList() {
  const categories = useSelector(categoriesList);

  const DropdownItemList = () =>
    categories.map((category, index) => (
      <Dropdown.Item key={index}>
        <div className="space-x-2">
          <Checkbox
            id={category}
            className="dark:border-white"
            color="gray"
            onChange={(e) => console.log(e.target)}
          />
          <Label htmlFor={category}>{category}</Label>
        </div>
      </Dropdown.Item>
    ));

  return <DropdownItemList />;
}

export default CategoriesList;
