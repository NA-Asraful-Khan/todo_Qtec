/* eslint-disable react/prop-types */
import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export const CustomForm = ({addTask}) => {
    const [task, setTask] = useState("")
    const [priority, setPriority] = useState('High');

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
        
    };
    const handleFormSubmit =(e)=>{
        e.preventDefault();
        addTask({
            name: task,
            priority:priority,
            checked:false,
            id: Date.now()
        })
        setTask("")
    }
  return (
    <form 
        className="todo"
        onSubmit={handleFormSubmit}
    >
        <div className="wrapper">
            <input 
            type="text"
            id="task"
            className="input"
            value={task}
            onInput={(e)=>setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Enter Task" />
            <label 
            htmlFor="task" 
            className="label">Enter Task</label>
        </div>
        <select
            className="select-option" name="priority" value={priority} // Ensure that the selected value is controlled by the component's state
            onChange={handlePriorityChange} >
            <option value="High" selected>High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <button 
        className="btn"
        aria-label="Add Task"
        type="submit"
        
        >
            <PlusIcon />
        </button>

    </form>
  )
}
