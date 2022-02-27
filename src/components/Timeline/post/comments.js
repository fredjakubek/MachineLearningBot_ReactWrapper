import { useState } from "react";
import { formatDistance } from "date-fns";
// import { Link } from "react-router-dom";
import AddComment from "./add-comment";
import avatar from 'animal-avatar-generator'

export default function Comments({
  docId,
  comments: allComments,
  posted,
  content,
}) {
  const [comments, setComments] = useState(allComments);
  const [commentsSlice, setCommentsSlice] = useState(3);

  const showNextComments = () => {
    setCommentsSlice(commentsSlice + 3);
  };

  return (
    <>
      <div className="post-comments">
        {comments.slice(0, commentsSlice).map((item, index) => (
          <p key={`${index}-${item.displayName}`} className="post-comment">
            <div className="flex flex-row">
              <img src={item.photoURL} class="commentsAvatarImg" />
              <div className="commentsText">
                <div className="commentsDisplayName"> {item.displayName} </div>
                <div> {item.comment} </div>
              </div>
            </div>
          </p>
        ))}
        {comments.length >= 3 && commentsSlice < comments.length && (
          <button
            className="view-all"
            type="button"
            onClick={showNextComments}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                showNextComments();
              }
            }}
          >
            View all {comments.length} comments
          </button>
        )}
        {/* <p className="text-gray-base uppercase text-xs mt-2">
                                {formatDistance(posted, new Date())} ago
                            </p> */}
      </div>
      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        content={content}
      />
    </>
  );
}
