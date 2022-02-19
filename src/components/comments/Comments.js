import { useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommenHandler = () => {};

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={addedCommenHandler}
        />
      )}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
