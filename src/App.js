import { useState } from "react";
import Greeting from "./Components/Greeting";
import { Quotes } from "./Components/Quotes";
import "./styles.css";
import User from "./Components/User";
import Weather from "./Components/Weather";

export default function App() {
  const [greet, setGreet] = useState();
  const [fullName, setFullName] = useState("");

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="App">
      <User fullName={fullName} setFullName={setFullName} />
      {fullName !== "" && <Weather />}
      {fullName !== "" && <h1>{time}</h1>}
      {fullName !== "" && (
        <Greeting greet={greet} setGreet={setGreet} fullName={fullName} />
      )}
      {fullName !== "" && <Quotes />}
    </div>
  );
}
