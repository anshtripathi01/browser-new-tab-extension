const Greeting = ({ greet, setGreet, fullName }) => {
  if (new Date().getHours() <= 12) {
    setGreet("Good Morning");
  } else if (new Date().getHours() > 12 && new Date().getHours() <= 4) {
    setGreet("Good Afternoon");
  } else {
    setGreet("Good Night");
  }
  return (
    <h2>
      {greet} , {fullName}
    </h2>
  );
};
export default Greeting;
