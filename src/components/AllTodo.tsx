import { useEffect, useState } from "react";
import { getTodo } from "../api/todoApi";

const AllTodo = () => {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    getTodo()
      .then((result) => {
        const todo = result.map((res: object) => res.task);
        console.log("result" + todo);
        setAllTodos(todo);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>All Todo</p>
      {allTodos.map((todo) => (
        <div>{todo}</div>
      ))}
    </div>
  );
};

export default AllTodo;
