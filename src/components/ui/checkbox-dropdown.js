"use client";

import { Dropdown, Label } from "flowbite-react";
import { HiOutlineFilter, HiChevronDown } from "react-icons/hi";
import CategoriesList from "./categories-list";
import { useDispatch } from "react-redux";

function CheckboxDropdown() {
  return (
    <Dropdown
      label=""
      placement="bottom"
      dismissOnClick={false}
      renderTrigger={() => (
        <div className="border-2 border-gray-200 dark:border-gray-600 flex flex-row items-center rounded-md px-4 py-2.5 space-x-2 hover:bg-gray-100 dark:hover:bg-opacity-10 group">
          <HiOutlineFilter className="mr-2 w-6 h-6  text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
          <Label className=" text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white font-bold">
            Filter
          </Label>
          <HiChevronDown className="mr-2 w-6 h-6 text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
        </div>
      )}
    >
      <Dropdown.Header>
        <span className="block text-sm">Category</span>
      </Dropdown.Header>
      <CategoriesList />
      {/* <Dropdown.Item>
        <div className="space-x-2">
          <Checkbox id="cat1" className="dark:border-white" color="gray" />
          <Label htmlFor="cat1">Category 1</Label>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="space-x-2">
          <Checkbox id="cat1" className="dark:border-white" color="gray" />
          <Label htmlFor="cat1">Category 2</Label>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="space-x-2">
          <Checkbox id="cat1" className="dark:border-white" color="gray" />
          <Label htmlFor="cat1">Category 3</Label>
        </div>
      </Dropdown.Item> */}
    </Dropdown>
  );
}

export default CheckboxDropdown;
