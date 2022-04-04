import { useEffect, useState } from "react";

export const Quotes = ({ fullName, greet }) => {
  const [thoughts, setThoughts] = useState("");
  const [quotes, setQuotes] = useState("");
  const api = "https://type.fit/api/quotes";

  const random = Math.floor(Math.random() * 10 + 1);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setQuotes(data[random].text))
      .catch((err) => console.log(err));
  },[random]);
  const yourThoughts = (e) => {
    if (e.key === "Enter") {
      setThoughts(e.target.value);
    }
  };

  return (
    <div>
      {!thoughts && <h3>What is is your main thoughts Today?</h3>}
      {!thoughts && <input onKeyDown={yourThoughts} type="text" />}
      <p className="quotes">"{quotes}"</p>

      {thoughts && (
        <p>
          <input type="checkBox" />
          {thoughts}...
        </p>
      )}
    </div>
  );
};
