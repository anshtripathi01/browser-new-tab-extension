import { useEffect, useState } from "react";
import "../styles.css"

const User = ({ fullName, setFullName }) => {
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const userInput = (e) => {
    setName(e.target.value);
  };
  const submitHandler = () => {
    if (name === "") {
      setFullName("");
      setError("ohho ! Please enter a valid name ");
    } else {
      setFullName(name);
      setError("");
    }
  };
  useEffect(() => {
    const name = localStorage.getItem("Name");
    if (name) setFullName(name);
  }, [setFullName]);
  useEffect(() => {
    if (fullName) window.localStorage.setItem("Name", fullName);
  });

  return (
    <div>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/ansh-tripathi/">
    <button>Add To Firefox</button>
    </a>
      {fullName === "" && <>
      <h1> Please type your name 😊</h1>
        <input onChange={userInput} />
        <button onClick={submitHandler}> Continue </button></>}
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default User;
