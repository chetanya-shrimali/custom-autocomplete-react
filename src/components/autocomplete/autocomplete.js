import { useState } from "react";
import List from "./list";

function Autocomplete({ data }) {
  const [displayList, setDisplayList] = useState([]);
  const [inputText, setInputText] = useState("");
  const filteredResults = (value) => {
    console.log(data, value);
    if (value) {
      setDisplayList(
        data.filter((res) => {
          // str.startsWith(
          return (
            res.name.toLowerCase().indexOf(value) !== -1 ||
            res.email.toLowerCase().indexOf(value) !== -1
          );
        })
      );
    } else {
      setDisplayList([]);
    }
  };

  const onSelect = (listItem) => {
    setInputText(listItem.name);
    setDisplayList([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          filteredResults(e.target.value);
        }}
      />
      <List data={displayList} onSelect={onSelect} />
    </div>
  );
}

export default Autocomplete;
