import React from "react";

export default function Filtering({ filterProductsByBrand }) {
  return (
    <section className="pt-8 md:pt-16 lg:pt-24">
      <div className="container">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-8">
          <select
            className="text-link text-zinc-700 py-1.5 px-4 rounded-md bg-orange-200"
            name="Filter"
            id="category-sort-filter"
            onChange={(e) => filterProductsByBrand(e.target.value)}
          >
            <option value="all">مرتب سازی براساس برند</option>
            <option value="bonmano">Bonmano</option>
            <option value="waggner">Waggner</option>
            <option value="starbucks">Starbucks</option>
            <option value="lavazza">Lavazza</option>
            <option value="jacobs">Jacobs</option>
            <option value="distro">Distro</option>
          </select>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={(event) => {
                event.target.checked
                  ? filterProductsByBrand("stock")
                  : filterProductsByBrand("all");
              }}
            />
            <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-zinc-300 dark:peer-focus:ring-orange-300 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-700"></div>
            <span className="ms-3 text-link text-zinc-700 dark:text-orange-300">
              فقط کالاهای موجود
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}
