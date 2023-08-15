
import { useState } from "react";
function Add() {
        const [todos, setTodos] = useState([]);
        const [newTodo, setNewTodo] = useState('');
      
        const handleAddTodo = () => {
            if (newTodo.trim() !== '') {
                setTodos([...todos, newTodo]);
                setNewTodo('');
            }
        };
        const logger = () =>{
            console.log(todos);
        }
    return (
        <div class="container mx-auto px-4 add" >
            <div className="join">
                <input type="text" placeholder="Add task" className="input join-item" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button className="btn btn-accent join-item "  onClick={handleAddTodo}>Add</button>
                <button className="btn btn-accent join-item "  onClick={logger}>Log</button>
            </div>
        </div>

     );
}

export default Add;