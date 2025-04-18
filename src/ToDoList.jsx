import React, { useState } from "react"

function ToDoList(){

    const [tasks,setTasks]=useState([
      "EAT BREAKFAST", "TAKE A SHOWER"
    ])
    const [newTask,setNewTask]=useState("")

    function handleInputChange(event){
    setNewTask(event.target.value)

    }

   function addTask(){
    if(newTask.trim() !== ""){
        setTasks([...tasks,newTask])
        setNewTask("")
    }
   }

   function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
   }

   function MoveTaskUp(index){
   
    if(index >0){
        const updatesTasks = [...tasks];
        [updatesTasks[index],updatesTasks[index-1]] = 
        [updatesTasks[index-1],updatesTasks[index]]
    
      setTasks(updatesTasks)
    }
   }

   function MoveTaskDown(index){
    if(index <tasks.length-1){
        const updatesTasks = [...tasks];
        [updatesTasks[index],updatesTasks[index+1]] = 
        [updatesTasks[index+1],updatesTasks[index]]
    
      setTasks(updatesTasks)
    }
   }



    return(<div className="to-do-list">

       <h1>To-Do-List</h1>

       <div>
        <input type="text" placeholder="Enter a task....." value={newTask} onChange={handleInputChange}/>

        <button className="add-button" onClick={addTask}>ADD TASK</button>
       </div>


       <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              DELETE
            </button>
            <button className="move-button" onClick={() => MoveTaskUp(index)}>
              UP
            </button>
            <button className="move-button" onClick={() => MoveTaskDown(index)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>  
    
    </div>)
}
export default ToDoList