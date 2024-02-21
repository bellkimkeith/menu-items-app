import { Card, DarkThemeToggle, Flowbite, Label } from "flowbite-react";
import MenuTable from "./components/menu/menu-table";
import AddButton from "./components/ui/add-button";
import CheckboxDropdown from "./components/ui/checkbox-dropdown";

function App() {
  return (
    <Flowbite>
      <Card className="min-w-full min-h-lvh rounded-none">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-4xl font-extrabold leading-none text-gray-900 dark:text-white">
            Menu Items
          </h5>
          <div className="flex flex-row items-center space-x-4">
            <AddButton />
            <CheckboxDropdown />
            <DarkThemeToggle className="border hover:text-black dark:hover:text-white" />
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
