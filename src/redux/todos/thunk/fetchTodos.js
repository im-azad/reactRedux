import {  loaded } from "../action"

const fetchTodos = async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await res.json()

    dispatch(loaded(todos))
}
export default fetchTodos