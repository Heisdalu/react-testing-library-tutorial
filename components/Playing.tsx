import { useState, useEffect } from "react";

const Playing = () => {
  const [data, setData] = useState<string[]>([]);

  const fetchData = () => {
    return Promise.resolve(["cat", "dog", "egg"]);
  };

  useEffect(() => {
    fetchData().then((el) => setData(el));
  });

  return (
    <div>
      {data.map((el, i) => (
        <div key={i}>{el}</div>
      ))}
    </div>
  );
};
export default Playing;
