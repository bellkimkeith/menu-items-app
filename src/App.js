import { Card, DarkThemeToggle, Flowbite } from "flowbite-react";
import MenuTable from "./components/menu/menu-table";
import CheckboxDropdown from "./components/ui/checkbox-dropdown";
import AddItemModal from "./components/ui/add-item-modal";

import React from "react";

function App() {
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
            <DarkThemeToggle className="hover:text-black dark:hover:text-white py-3 px-3 border-2 border-gray-200 dark:border-gray-600" />
          </div>
        </div>
        <div className="flow-root border rounded-md border-gray-300">
          <MenuTable />
        </div>
      </Card>
    </Flowbite>
  );
}

export default App;
