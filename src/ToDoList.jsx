import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["EAT BREAKFAST", "TAKE A SHOWER"]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    if (editIndex === index) {
      setEditIndex(null);
      setEditedTask("");
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function handleEdit(index) {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  }

  function handleEditChange(event) {
    setEditedTask(event.target.value);
  }

  function saveEdit(index) {
    if (editedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditedTask("");
    }
  }

  function cancelEdit() {
    setEditIndex(null);
    setEditedTask("");
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task....."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          ADD TASK
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text" className="edit-button"
                  value={editedTask}
                  onChange={handleEditChange}
                />
                <button className="save-button" onClick={() => saveEdit(index)}>SAVE</button>
                <button className="cancel-button" onClick={cancelEdit}>CANCEL</button>
              </>
            ) : (
              <>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  DELETE
                </button>
                <button className="edit-button" onClick={() => handleEdit(index)}>
                  EDIT
                </button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>
                  UP
                </button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>
                  DOWN
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
