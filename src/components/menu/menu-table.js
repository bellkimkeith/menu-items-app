"use client";

import { Table } from "flowbite-react";
import MenuList from "./menu-list";
import MenuHeader from "./menu-header";

function MenuTable() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <MenuHeader />
        <MenuList />
      </Table>
    </div>
  );
}

export default MenuTable;
