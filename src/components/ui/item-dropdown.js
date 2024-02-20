"use client";

import { Dropdown } from "flowbite-react";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi";

function ItemDropdown() {
  return (
    <Dropdown
      label=""
      dismissOnClick={true}
      renderTrigger={() => (
        <svg
          class="w-5 h-5 hover:text-black"
          aria-hidden="true"
          fill="currentColor"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      )}
    >
      <Dropdown.Item icon={HiPencil}>Edit</Dropdown.Item>
      <Dropdown.Item icon={HiEye}>View</Dropdown.Item>
      <Dropdown.Item icon={HiTrash}>Delete</Dropdown.Item>
    </Dropdown>
  );
}

export default ItemDropdown;
