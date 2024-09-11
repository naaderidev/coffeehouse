import React from "react";

export default function TitleBox({ title, subTitle }) {
  return (
    <div className="container flex items-end mb-5 lg:mb-8">
      <div className="pb-2">
        <h3 className="section-title">{title}</h3>
        <h4 className="section-subtitle">{subTitle}</h4>
      </div>
    </div>
  );
}
