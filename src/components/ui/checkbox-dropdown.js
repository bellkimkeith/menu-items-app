"use client";

import { Dropdown, Label } from "flowbite-react";
import { HiOutlineFilter, HiChevronDown } from "react-icons/hi";
import CategoriesList from "./categories-list";

function CheckboxDropdown() {
  return (
    <Dropdown
      label=""
      placement="bottom"
      dismissOnClick={false}
      renderTrigger={() => (
        <div className="border-2 border-gray-200 dark:border-gray-600 flex flex-row items-center rounded-md  sm:px-4 sm:py2.5 md:px-4 md:py-2.5 px-2 py-1 space-x-0 hover:bg-gray-100 dark:hover:bg-opacity-10 group h-10 md:h-12">
          <HiOutlineFilter className="mr-2 w-6 h-6  text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
          <Label className=" text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white font-bold text hidden sm:block">
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
    </Dropdown>
  );
}

export default CheckboxDropdown;
