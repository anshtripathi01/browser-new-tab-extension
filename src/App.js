import { useState } from "react";
import "./styles.css";
import Greeting from "./Components/Greeting";
import { Quotes } from "./Components/Quotes";
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
      {fullName !== "" && <> <Weather />
        <h1>{time}</h1>
        <Greeting greet={greet} setGreet={setGreet} fullName={fullName} />
        <Quotes /> </>}
    </div>
  );
}
