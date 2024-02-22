"use client";

import { Table } from "flowbite-react";
import ItemDropdown from "../ui/item-dropdown";

function MenuList() {
  const items = {
    "-Ngmfldkvnajdkgutopw": {
      category: "Meal",
      cost: 60,
      id: "-Ngmfldkvnajdkgutopw",
      name: "beef tapa",
      option: "N/A",
      price: 89,
      stock: 24,
    },
    "-Nqedflothgndkapblgy": {
      category: "Snack",
      cost: 40,
      id: "-Nqedflothgndkapblgy",
      name: "french fries",
      option: "Medium",
      price: 60,
      stock: 14,
    },
  };

  // console.log(...Object.values(items[0]));

  const itemsValues = [...Object.values(items)];

  return (
    <Table.Body className="divide-y">
      {itemsValues.map((item, index) => (
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
