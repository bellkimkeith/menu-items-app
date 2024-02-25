"use client";

import { Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, menuItemsList } from "../../features/items/itemsSlice";
import { ref, remove } from "firebase/database";
import { db } from "../../utils/firebase";
import DeleteItemModal from "../ui/modals/delete-item-modal";
import EditItemModal from "../ui/modals/edit-item-modal";

function MenuList() {
  const menuItems = useSelector(menuItemsList);
  const dispatch = useDispatch();

  async function deleteItemHandler(id) {
    await remove(ref(db, `items/${id}`));
    dispatch(deleteItem(id));
  }

  if (menuItems.length === 0) {
    return (
      <Table.Body className="divide-y">
        <Table.Row
          key="fallback"
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            No items yet.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }

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
          <Table.Cell>{item.option}</Table.Cell>
          <Table.Cell>{item.category}</Table.Cell>
          <Table.Cell>{item.cost}</Table.Cell>
          <Table.Cell>{item.price}</Table.Cell>
          <Table.Cell>{item.stock}</Table.Cell>

          <Table.Cell>
            <div className="flex flex-row space-x-2">
              <EditItemModal itemData={item} />
              <DeleteItemModal
                deleteItemHandler={() => deleteItemHandler(item.id)}
              />
            </div>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}

export default MenuList;
