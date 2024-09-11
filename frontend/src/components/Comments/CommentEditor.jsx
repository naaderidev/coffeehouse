import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postNewComment } from "../../api/axios/requests/CommentsRequests";
//----------Hooks
import useSwalModal from "../../utils/hooks/useSwalModal";
import useAuth from "../../utils/hooks/useAuth";
//----------CKEditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CommentEditor() {
  const [comment, setComment] = useState("");
  let params = useParams();
  const Modal = useSwalModal();
  const navigate = useNavigate();
  const AuthContext = useAuth()

  const postComment = (event) => {
    event.preventDefault();
    let insertComment = {
      body: comment.data,
      username: AuthContext.userInfo.name,
      productId: params.productID,
    };

    postNewComment(insertComment)
      .then(() => {
        Modal.fire({
          title: "متشکریم",
          text: "پیام شما با موفقیت ارسال شد",
          confirmButtonText: "فروشگاه",
          icon: "success",
          iconColor: "#0f766e",
        }).then(() => navigate("/store/1"));
      })
      .catch(() => {
        Modal.fire({
          title: "متاسفیم",
          text: "درحال حاضر امکان ارسال پیام وجود ندارد",
          confirmButtonText: "فروشگاه",
          icon: "error",
          iconColor: "#b91c1c",
        }).then(() => navigate("/store/1"));
      });
  };

  return (
    <div className="px-4 mx-8 rounded-2xl bg-orange-300 text-link">
      <CKEditor
        className=""
        editor={ClassicEditor}
        data="<p></p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          // console.log({ event, editor, data });
          setComment({ data });
        }}
      />
      <button className="btn-teal text-link my-3" onClick={postComment}>
        ارسال دیدگاه
      </button>
    </div>
  );
}
