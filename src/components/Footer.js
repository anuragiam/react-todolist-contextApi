import React,{useState, useContext} from 'react'

import {DataContext} from "./DataProvider"

export default function Footer() {
    
    const [checkAll, setCheckAll]= useState(false)
    const [todos, setTodos] = useContext(DataContext)

    const handleCheckAll = () => {
        const newTodos= [...todos]
        newTodos.forEach(todo => {
            todo.complete= !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const deleteTodo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos)
        setCheckAll(false)
    }
    
    return (
        <>
        {
            todos.length === 0 ? <h4>No task present</h4> 
            : <div className="row">
                <label htmlFor="all">
                    <input 
                        type="checkbox" 
                        name="all" 
                        id="all"
                        onClick={handleCheckAll}
                        checked={checkAll}
                    />
                    Select all
                </label>
                <p>You have total of {todos.length} {(todos.length === 1)? "task" : "tasks"}!</p>
                 <button 
                    id="delete"
                    onClick={deleteTodo}    
                >Delete</button>
            </div>
        }
        </>
                
    )
}
