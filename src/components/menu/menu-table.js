"use client";

import { Table } from "flowbite-react";
import MenuList from "./menu-list";
import MenuHeader from "./menu-header";
import { onValue, query, ref } from "firebase/database";
import { db } from "../../utils/firebase";
import { menuItemsList, setItems } from "../../features/items/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

function MenuTable() {
  const recentPostsRef = query(ref(db, "items"));
  const dispatch = useDispatch();
  onValue(recentPostsRef, (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      setItems(dispatch(setItems(Object.values(data))));
    }
  });

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
