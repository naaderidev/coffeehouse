import React from "react";
import { convertInputDateToJalali, getTextFromHtml } from "../../utils/helpers";

export default function CommentCard(props) {
  const commentDate = convertInputDateToJalali(props.createdAt);
  return (
    <div className="px-2  mb-4 rounded-2xl bg-gray-100 text-zinc-700 dark:bg-zinc-900 dark:text-gray-100 text-link">
      <div className="flex items-center gap-2">
        <img
          src="/images/icons/profile.png"
          className="w-12 h-12 rounded-full"
          alt=""
        />
        <div>
          <h3 className="text-regular pt-4">{props.username}</h3>
          <h4 className="py-2">
            {commentDate.day} {commentDate.month} {commentDate.year}
          </h4>
        </div>
      </div>
      <p className="p-4 leading-8 indent-4">{getTextFromHtml(props.body)}</p>
    </div>
  );
}
