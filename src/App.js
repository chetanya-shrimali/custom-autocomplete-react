import "./styles.css";
import Autocomplete from "./components/autocomplete/autocomplete";
import { useEffect, useState } from "react";
import AxiosAPI from "./components/axiosAPI/axiosAPI";

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
        <li>
          api integeration/calls on directly searching from search box, check
          axios
        </li>
        <li>debounce</li>
        <li>form errors</li>
        <li>routing with params</li>
        <li>file upload</li>
        <li>table</li>
        <li>keydown scene</li>
        <li>encode decode uri</li>
      </ul>
      <Autocomplete data={data} />
      <AxiosAPI />
    </div>
  );
}
