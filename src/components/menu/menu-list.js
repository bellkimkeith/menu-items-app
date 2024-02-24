"use client";

import { Table } from "flowbite-react";
import ItemDropdown from "../ui/item-dropdown";
import { useSelector } from "react-redux";
import { menuItemsList } from "../../features/items/itemsSlice";

function MenuList() {
  const menuItems = useSelector(menuItemsList);

  return (
    <Table.Body className="divide-y">
      {menuItems.map((item, index) => (
        <Table.Row
          key={index}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white capitalize">
            {item.name}
          </Table.Cell>
          <Table.Cell>{item.cost}</Table.Cell>
          <Table.Cell>{item.category}</Table.Cell>
          <Table.Cell>{item.price}</Table.Cell>
          <Table.Cell>{item.stock}</Table.Cell>
          <Table.Cell>{item.option}</Table.Cell>
          <Table.Cell>
            <ItemDropdown />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}

export default MenuList;
