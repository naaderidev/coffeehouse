import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import {
//   HiOutlineChevronDoubleRight,
//   HiOutlineChevronDoubleLeft,
// } from "react-icons/hi2";

export default function Pagination({
  items,
  itemsCount,
  pathName,
  setShownItems,
}) {
  const [pageCount, setPageCount] = useState(null);
  const { page } = useParams();

  useEffect(() => {
    let endIndex = itemsCount * page;
    let startIndex = endIndex - itemsCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShownItems(paginatedItems);

    let pagesNumber = Math.ceil(items.length / itemsCount);
    setPageCount(pagesNumber);
  }, [page, items]);
  
  return (
    <div className="flex-center gap-x-4 my-4 text-zinc-700 dark:text-orange-200">
      {/* <HiOutlineChevronDoubleRight className="icon-md hover:text-orange-300 dark:hover:text-orange-300" /> */}
      <div className="flex gap-x-2 text-subtitle">
        {Array(pageCount)
          .fill(0)
          .map((item, index) => (
            <Link
              to={`${pathName}/${index + 1}`}
              key={index}
              className={
                index + 1 === Number(page)
                  ? "px-2 rounded cursor-pointer transition-all hover:text-orange-300 dark:hover:text-orange-300 border border-orange-300"
                  : "px-2 rounded cursor-pointer transition-all hover:text-orange-300 dark:hover:text-orange-300"
              }
            >
              {index + 1}
            </Link>
          ))}
      </div>
      {/* <HiOutlineChevronDoubleLeft className="icon-md hover:text-orange-300 dark:hover:text-orange-300" /> */}
    </div>
  );
}
