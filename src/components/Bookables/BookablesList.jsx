import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const { bookables } = require("../../static.json");

const BookablesList = () => {
  const [bookableIndex, setBookableIndex] = useState(1);
  const [group, setGroup] = useState("Kit");

  const bookablesInGroup = bookables.filter(b => b.group === group);
  const groups = [...new Set(bookables.map(b => b.group))];

  const changeBookable = (selectedIndex) => {
    setBookableIndex(selectedIndex)
  }

  const nextBookable = () => {
    // setBookableIndex(bookableIndex % bookablesInGroup.length); //WONT UPDATE THE STATE
    setBookableIndex(oldState => (oldState + 1) % bookablesInGroup.length);
  }

  return (
    <div>
      <select 
        name="groups" 
        id="" 
        onChange={(e) => setGroup(e.target.value)}
      >
        {groups.map(g => <option value={g} key={g}>{g}</option>)}
      </select>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((b, i) => (
          <li key={b.id} className={i === bookableIndex ? "selected" : null}>
            <button className="btn" onClick={() => changeBookable(i)}>{b.title}</button>
          </li>
        ))}
      </ul>
      <p>
        <button className="btn" onClick={nextBookable} autoFocus>
          <FaArrowRight/>
          <span>Next</span>
        </button>
      </p>
    </div>
  );
};

export default BookablesList;
