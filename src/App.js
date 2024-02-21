import { Card, DarkThemeToggle, Flowbite, Label } from "flowbite-react";
import MenuTable from "./components/menu/menu-table";

function App() {
  return (
    <Flowbite>
      <Card className="min-w-full min-h-lvh rounded-none">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Menu Items
          </h5>
          <div className="flex flex-row items-center space-x-2">
            <Label>Add Button</Label>
            <Label>Filter Dropdown</Label>
            <DarkThemeToggle />
          </div>
        </div>
        <div className="flow-root">
          <MenuTable />
        </div>
      </Card>
    </Flowbite>
  );
}

export default App;
