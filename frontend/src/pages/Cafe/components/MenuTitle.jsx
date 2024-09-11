import React from "react";

export default function MenuTitle({ title }) {
  return (
    <>
      <h1 className="text-2xl tracking-tighter font-MorabbaBold text-zinc-700 dark:text-orange-300 mb-4 mr-2">
        {title}
      </h1>
      <span className="border-b-2 border-orange-300 block w-full mx-auto border-shadow mb-8"></span>
    </>
  );
}
