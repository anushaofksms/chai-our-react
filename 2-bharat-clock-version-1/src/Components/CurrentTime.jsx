let CurrentTime = () => {
  let time = new Date();
  return (
    <p>
      This is the time {time.toLocaleDateString()} -{time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
