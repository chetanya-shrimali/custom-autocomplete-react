import { useState } from "react";
import List from "./list";

function Autocomplete({ data }) {
  const [displayList, setDisplayList] = useState([]);
  const [inputText, setInputText] = useState("");

  const filteredResults = (value) => {
    if (value) {
      setDisplayList(
        data.filter((res) => {
          // str.startsWith()
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

  // comparing strings in objects
  const sortResults = (e) => {
    var displayCopy = [...displayList];
    setDisplayList(
      displayCopy.sort((a, b) => {
        let value1 = a[e.target.value];
        let value2 = b[e.target.value];
        if (value1 > value2) {
          return 1;
        } else if (value1 < value2) {
          return -1;
        }
        return 0;
      })
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            filteredResults(e.target.value);
          }}
        />
        <select id="sort" onChange={sortResults}>
          <option disabled value selected>
            -- select an option --
          </option>
          <option value="name">name</option>
          <option value="email">email</option>
        </select>
        <select
          id="itemSelect"
          onChange={(e) => {
            console.log(data[e.target.value]);
          }}
        >
          <option disabled value="" selected>
            -- select an option --
          </option>
          {data.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name} {item.email}
              </option>
            );
          })}
        </select>
      </div>
      <List data={displayList} onSelect={onSelect} />
    </div>
  );
}

export default Autocomplete;
