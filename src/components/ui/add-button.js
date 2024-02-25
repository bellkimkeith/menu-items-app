"use client";

import { Button, Label } from "flowbite-react";
import { HiPlus } from "react-icons/hi";

import React from "react";

function AddButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="px-0 py-0 border-2 border-gray-200 h-10 ml-5 md:h-12"
      color="gray"
    >
      <div className="flex flex-row space-x-2 items-center">
        <HiPlus className="h-5 w-5 text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
        <Label className="font-bold text-gray-700 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white text-wrap">
          Add Item
        </Label>
      </div>
    </Button>
  );
}

export default AddButton;
