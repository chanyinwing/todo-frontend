const AddToDoForm = () => {

    
  return (
    <div>
      <div>To Do List</div>
      <form>
        <input type="text" name="name" placeholder="Task Name" required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddToDoForm;
