import { toggled } from "../action";

const updateStatus = (todoID, currentStatus) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoID}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    });
    const todo = await res.json();

    dispatch(toggled(todo.id));
  };
};
export default updateStatus;
