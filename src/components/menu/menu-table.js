"use client";

import { Button, Card, Table } from "flowbite-react";
import MenuList from "./menu-list";
import MenuHeader from "./menu-header";

function MenuTable() {
  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex items-center justify-between p-5">
        <h5 className="font-bold leading-none text-gray-900 dark:text-white text-3xl">
          Menu Items
        </h5>
        <div className="font-bold leading-none text-gray-900 dark:text-white text-3xl">
          <></>
        </div>
      </div>
      <Table hoverable>
        <MenuHeader />
        <MenuList />
      </Table>
    </div>
  );
}

export default MenuTable;
