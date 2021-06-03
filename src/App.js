import "./styles.css";
import Autocomplete from "./components/autocomplete/autocomplete";
import data from "./data";
export default function App() {
  return (
    <div className="App">
      <ul>
        <li>api calls</li>
        <li>form errors</li>
        <li>routing</li>
        <li>file upload</li>
        <li>table</li>
      </ul>
      <Autocomplete data={data} />
    </div>
  );
}
