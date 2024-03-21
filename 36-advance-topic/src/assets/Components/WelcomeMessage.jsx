const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center>
      <h1 className="welcome">There are no posts</h1>
      {/* <button onClick={onGetPostsClick} className="btn btn-primary">
        Get Posts From Server
      </button> */}
    </center>
  );
};

export default WelcomeMessage;
