"use client";

import { Dropdown } from "flowbite-react";
import { HiPencil, HiTrash } from "react-icons/hi";

function ItemDropdown() {
  return (
    <Dropdown
      label=""
      placement="auto"
      dismissOnClick={true}
      renderTrigger={() => (
        <svg
          className="w-6 h-6 hover:text-black text-gray-500 hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white rounded-sm cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="4"
            d="M6 12h0m6 0h0m6 0h0"
          />
        </svg>
      )}
    >
      <Dropdown.Item icon={HiPencil}>Edit</Dropdown.Item>
      <Dropdown.Item className="text-red-500 dark:text-red-400" icon={HiTrash}>
        Delete
      </Dropdown.Item>
    </Dropdown>
  );
}

export default ItemDropdown;
