import NoteImage from "../assets/images/notes.png";

import doubleTickImage from "../assets/images/double-tick.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { allCompleted, clearCompleted } from "../redux/todos/action";
import addTodo from "../redux/todos/thunk/addTodo";

function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onChangHandler = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const completeHandler = () => {
    dispatch(allCompleted());
  };
  const clearHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={NoteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          value={input}
          onChange={onChangHandler}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={
            "text-cyan-950 border-2 border-sky-500 text-2xl px-3 py-1 "
          }
        >
          +
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={doubleTickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}

export default Header;
