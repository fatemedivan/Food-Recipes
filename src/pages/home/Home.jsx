import React, { useEffect, useState } from "react";
import Recipelist from "../../components/recipelist/Recipelist";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("http://localhost:3000/recipes");
      const data = await res.json();
      setData(data);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Recipelist recipes={data} />
    </div>
  );
}
