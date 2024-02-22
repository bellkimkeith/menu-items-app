"use client";

import { Table } from "flowbite-react";
import ItemDropdown from "../ui/item-dropdown";

function MenuList() {
  return (
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Beef Tapa
        </Table.Cell>
        <Table.Cell>50</Table.Cell>
        <Table.Cell>Meal</Table.Cell>
        <Table.Cell>89</Table.Cell>
        <Table.Cell>25</Table.Cell>
        <Table.Cell>N/A</Table.Cell>
        <Table.Cell>
          <ItemDropdown />
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Halo-halo
        </Table.Cell>
        <Table.Cell>60</Table.Cell>
        <Table.Cell>Dessert</Table.Cell>
        <Table.Cell>99</Table.Cell>
        <Table.Cell>30</Table.Cell>
        <Table.Cell>Medium</Table.Cell>
        <Table.Cell>
          <ItemDropdown />
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          Nachos
        </Table.Cell>
        <Table.Cell>20</Table.Cell>
        <Table.Cell>Drink</Table.Cell>
        <Table.Cell>35</Table.Cell>
        <Table.Cell>50</Table.Cell>
        <Table.Cell>Large</Table.Cell>
        <Table.Cell>
          <ItemDropdown />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}

export default MenuList;
