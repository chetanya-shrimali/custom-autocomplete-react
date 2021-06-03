import "./styles.css";
import Autocomplete from "./components/autocomplete/autocomplete";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getTasks();
      setData(res);
    };
    getData();
  }, []);

  const getTasks = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  };
  return (
    <div className="App">
      <ul>
        <li>api calls</li>
        <li>form errors</li>
        <li>routing with params</li>
        <li>file upload</li>
        <li>table</li>
        <li>keydown scene</li>
      </ul>
      <Autocomplete data={data} />
    </div>
  );
}
