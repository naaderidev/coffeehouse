import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMainProductComments } from "../../api/axios/requests/CommentsRequests";
import CommentCard from "./CommentCard";
import ErrorBox from "../Common/ErrorBox";
import PendingBox from "../Common/PendingBox";
import EmptyCommentContainer from "./EmptyCommentContainer";

export default function CommentContainer() {
  const [comments, setComments] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    getMainProductComments(params.productID)
      .then((res) => {
        setComments(res.data.productComments);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="bg-orange-300 rounded-2xl px-4 mx-8 ">
      {error && <ErrorBox />}
      {isPending && <PendingBox />}
      {!error && !isPending && comments.length ? (
        comments?.map((comment) => {
          return <CommentCard key={comment._id} {...comment} />;
        })
      ) : (
        <EmptyCommentContainer />
      )}
    </div>
  );
}
