import React, { useContext, useRef } from "react";
import PostListProvider, { PostList } from "../../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIDElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIDElement.current.value;
    const postTitle = titleElement.current.value;
    const postBody = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIDElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userID" className="form-label">
            Enter your User Id
          </label>
          <input
            type="text"
            ref={userIDElement}
            className="form-control"
            id="userID"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={titleElement}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={bodyElement}
            type="text"
            className="form-control"
            id="title"
            placeholder="Tell Us More"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Tell Us More"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your reaction here
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Tell Us More"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
