"use client";

import { Table } from "flowbite-react";
import MenuList from "./menu-list";
import MenuHeader from "./menu-header";
import { onValue, query, ref } from "firebase/database";
import { db } from "../../utils/firebase";
import { setItems } from "../../features/items/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../features/categories/categoriesSlice";

function MenuTable() {
  const recentPostsRef = query(ref(db, "items"));
  const dataFilter = useSelector(filter);
  const dispatch = useDispatch();
  onValue(recentPostsRef, (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      const finalData =
        dataFilter.length === 0
          ? Object.values(data)
          : Object.values(data).filter((val) =>
              dataFilter.includes(val.category)
            );
      setItems(dispatch(setItems(finalData)));
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
