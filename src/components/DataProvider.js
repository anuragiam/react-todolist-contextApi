import React,{useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([]);
    //saving data store on browser
    useEffect(()=>{
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if (todoStore) setTodos(todoStore) 
    },[])
    // creating todo list on browser 
    useEffect(()=>{
        localStorage.setItem('todoStore',JSON.stringify(todos))
    }, [todos])
    
    return (
        <DataContext.Provider value={[todos,setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
