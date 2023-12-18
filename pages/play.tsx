import React, { useState, useEffect } from "react";
import Playing from "@/components/Playing";


// https://api.frontendeval.com/fake/word

const Play = () => {
  const [data, setData] = useState<string[]>([]);


  



  const fetchData = () => {
    return Promise.resolve(["cat", "dog", "egg"]);
  };

  useEffect(() => {
    fetchData().then((el) => setData(el));
  });

  // debugger;
  return (
    <div>
      <button type="submit" aria-label="divine">
        <svg />
      </button>
      <Playing />
      <button type="button">Exit</button>
      <label htmlFor="divineInput">User Name</label>
      <input type="text" id="divineInput" name="divineInput" />
      <input type="text" />
      <ul>
        {data.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
export default Play;
