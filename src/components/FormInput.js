import React,{useState,useContext} from 'react'

import {DataContext} from "./DataProvider"

export default function FormInput() {
    const [todos,setTodos] = useContext(DataContext)
    const [todoName,setTodoName] = useState("")
    
    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos,{name: todoName, complete: false}])
        setTodoName("");

    }

    return (
        <div>
            <form autoComplete="off" onSubmit={addTodo}>
                <input
                    value={todoName} 
                    type="text" 
                    name="todos" 
                    id="todos"
                    required placeholder="Create"
                    onChange={e => setTodoName(e.target.value.toLowerCase())}
                />
        <button type="submit">Create</button> 
      </form>
        </div>
    )
}
 