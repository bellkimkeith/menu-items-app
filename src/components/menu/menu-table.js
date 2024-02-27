"use client";

import { Pagination, Table } from "flowbite-react";
import MenuList from "./menu-list";
import MenuHeader from "./menu-header";
import { onValue, query, ref } from "firebase/database";
import { db } from "../../utils/firebase";
import { setItems } from "../../features/items/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../features/categories/categoriesSlice";
import { useEffect, useState } from "react";

function MenuTable({ showToast }) {
  const recentPostsRef = query(ref(db, "items"));
  const dataFilter = useSelector(filter);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastRecord = currentPage * itemsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;
  const [pages, setPages] = useState(0);
  // const currentItems = menuItems.slice(indexOfFirstRecord, indexOfLastRecord);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    onValue(recentPostsRef, async (snapshot) => {
      const data = await snapshot.val();
      if (data !== null) {
        const finalData =
          dataFilter.length === 0
            ? Object.values(data)
            : Object.values(data).filter((val) =>
                dataFilter.includes(val.category)
              );
        setPages(Math.ceil(finalData.length / itemsPerPage));
        setItems(
          dispatch(
            setItems(finalData.slice(indexOfFirstRecord, indexOfLastRecord))
          )
        );
      }
    });
  }, [currentPage]);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <MenuHeader />
        <MenuList showToast={showToast} />
      </Table>
      {pages > 1 ? (
        <div className="flex overflow-x-auto justify-center mb-5">
          <Pagination
            currentPage={currentPage}
            totalPages={pages}
            onPageChange={onPageChange}
          />
        </div>
      ) : null}
    </div>
  );
}

export default MenuTable;
