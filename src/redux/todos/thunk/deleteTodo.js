import { deleted } from "../action";

const deleteTodo = (todoID) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoID}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoID));
  };
};
export default deleteTodo;
