import { useState } from "react";
import { TodoType } from "../types/todo.types";
import { addTodo } from "../api/todoApi";

const AddToDoForm = () => {
  const [task, setTask] = useState<TodoType>({
    task: "gym",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await addTodo(task);
      console.log("task added: " + JSON.stringify(response));
    } catch (err) {
      console.log("cannot add task with error: " + err);
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          onChange={handleChange}
          name="task"
          placeholder="Enter Task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddToDoForm;
