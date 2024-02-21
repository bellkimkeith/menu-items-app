"use client";

import { Dropdown } from "flowbite-react";
import { HiEye, HiPencil, HiTrash, HiDotsHorizontal } from "react-icons/hi";

function ItemDropdown() {
  return (
    <Dropdown
      label=""
      dismissOnClick={true}
      renderTrigger={() => (
        <HiDotsHorizontal className="w-6 h-6 hover:text-black text-gray-500 hover:bg-gray-200 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white rounded-sm cursor-pointer" />
      )}
    >
      <Dropdown.Item icon={HiPencil}>Edit</Dropdown.Item>
      <Dropdown.Item icon={HiEye}>View</Dropdown.Item>
      <Dropdown.Item className="text-red-500" icon={HiTrash}>
        Delete
      </Dropdown.Item>
    </Dropdown>
  );
}

export default ItemDropdown;
