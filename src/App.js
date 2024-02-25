import { Card, DarkThemeToggle, Flowbite, Label } from "flowbite-react";
import MenuTable from "./components/menu/menu-table";
import CheckboxDropdown from "./components/ui/checkbox-dropdown";
import AddItemModal from "./components/ui/modals/add-item-modal";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "./features/categories/categoriesSlice";
import { setOptions } from "./features/options/optionsSlice";
import { Toaster, toast } from "sonner";
import { FaTrash } from "react-icons/fa";

function App() {
  const categories = ["Meal", "Snack", "Dessert"];
  const options = ["Small", "Medium", "Large", "N/A"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories(categories));
    dispatch(setOptions(options));
  }, []);

  function showToastHandler() {
    toast.error(
      <div className="flex flex-row space-x-3">
        <FaTrash className="h-5 w-5 text-red-600 dark:red-cyan-500" />
        <Label>Item Deleted</Label>
      </div>
    );
  }

  return (
    <Flowbite>
      <Card className="min-w-full min-h-lvh rounded-none">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-4xl font-extrabold leading-none text-gray-900 dark:text-white">
            Menu Items
          </h5>
          <div className="flex flex-row items-center space-x-4">
            <AddItemModal />
            <CheckboxDropdown />
            <DarkThemeToggle className="hover:text-black dark:hover:text-white py-1 pl-1.5 sm:py-1 sm:pl-1.5 border-2 border-gray-200 dark:border-gray-600 size-9 md:size-12 md:py-3 md:px-3 sm:size-9 lg:size-13" />
          </div>
        </div>
        <div className="flow-root border rounded-md border-gray-300">
          <MenuTable showToast={showToastHandler} />
        </div>
        <Toaster richColors position="bottom-center" />
      </Card>
    </Flowbite>
  );
}

export default App;
