function Message() {
  const name = "Mary";
  if(name)
    return (
    <div>
      <h1>Hello World...of React!</h1>
      <p>I am {name}</p>
    </div>
    );
  return <h1>Hello World...of React!</h1>;
  
}

export default Message;
