import { useEffect, useState } from "react";

export const Quotes = ({ fullName, greet }) => {
  const [thoughts, setThoughts] = useState("");
  const [quotes, setQuotes] = useState("");
  const [check,setCheck] = useState("checked")
  const api = "https://type.fit/api/quotes";

  const random = Math.floor(Math.random() * 10 + 1);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setQuotes(data[random].text))
      .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const yourThoughts = (e) => {
    setTimeout(()=>{
      if (e.key === "Enter") {
        setThoughts(e.target.value);
        setCheck("")
      }
      else{
        setCheck("checked")
      }
    },1000)
    
  };

  return (
    <div>
      { check ==="checked" ? <> <h2>What is is your main thoughts Today?</h2>
       <input onKeyDown={yourThoughts} type="text" /> </>:<>
        <h2>
          <input type="checkBox" onClick={yourThoughts} />
           {thoughts}... 
        </h2></>}
    <p className="quotes">"{quotes}"</p>
    </div>
  );
};
