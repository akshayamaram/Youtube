import React, { useState } from "react";
import "../styles/Comments.css";

const sampleCommentsDataStructure = [
  {
    text: "comment 1",
    childComments: [
      {
        text: "comment 1.1",
        childComments: [
          {
            text: "comment 1.1.1",
            childComments: [],
          },
        ],
      },
      {
        text: "comment 1.2",
        childComments: [],
      },
    ],
  },
  {
    text: "comment 2",
    childComments: [],
  },
  {
    text: "comment 3",
  },
];

const Comments = () => {

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const onParentCommentAdded = () => {
    setComments((prev) => {
      return [
        ...prev,
        {
          text,
          childComments: [],
        },
      ];
    });
    setText(""); // reset the input field after adding a comment
  };

  // console.log("comment :" , comments);

  const addCommentsOnReply = (text, path) => {
    // console.log("text :", text);
    // console.log("path :", path);

    let commentsCopy = comments;
    let updatedComments = [...commentsCopy]
    const pathArray = path.split("_")

    for(let i = 0; i < pathArray.length; i++) {
      updatedComments = updatedComments[pathArray[i]].childComments
    }
    updatedComments.push({
      text,
      childComments: [],
    })
    // console.log("Updated comments :", updatedComments);
    // console.log("commentsCopy :", commentsCopy); 
    setComments(commentsCopy)
  };

  return (
    <div className="comments-wrapper">
      <h2 className="comments-title">comments</h2>
      <div className="comment-input-wrapper">
        <input
          className="comment-input"
          value={text}
          type="text"
          placeholder="Add a comment..."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="comment-submit-btn" onClick={onParentCommentAdded}>
          Comment
        </button>
      </div>

      <div className="comments-holder">
        {comments.map((comment, index) => (
          <CommentBlock
            comment={comment}
            index={index}
            key={index}
            addCommentsOnReply={addCommentsOnReply}
            path={`${index}`}
          />
        ))}
      </div>
    </div>
  );
};

const CommentBlock = ({ comment, index, addCommentsOnReply, path }) => {

  const [text, setText] = useState("");
  const [isReplyClicked, setIsReplyClicked] = useState(false);

  const onReplyClicked = () => {
    setIsReplyClicked(true);
  };

  const onAddNestedComments = () => {
    addCommentsOnReply(text, path);
    setText(""); // reset the input field after adding a comment
    setIsReplyClicked(false);
  };

  return (
    <div className="comment-card" key={index}>
      <p className="comment-text">{comment.text}</p>
      <div className="reply-btn-wrap">
        <button className="reply-btn" onClick={onReplyClicked}>
          Reply
        </button>
      </div>

      {isReplyClicked && (
        <div className="reply-comment-card">
          <input
            className="reply-add-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="reply-add-btn" onClick={onAddNestedComments}>
            Add
          </button>
        </div>
      )}

      <div className="recursive-comments">
        {comment.childComments.map((comment, index) => {
          return(
            <CommentBlock
              comment={comment}
              index={index}
              key={index}
              addCommentsOnReply={addCommentsOnReply}
              path={`${path}_${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
