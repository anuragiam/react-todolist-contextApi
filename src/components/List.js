import React, { useContext } from 'react'


import ListItem from "./ListItem"
import { DataContext } from "./DataProvider"

export default function List({ filterValue }) {

    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }

    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }

    const applyFilter = (list, filterVal) => {
        let filteredList = [...list];
        if (filterVal === 'finished')
            return filteredList.filter(item => item.complete === true)
        else if (filterVal === 'unfinished')
            return filteredList.filter(item => item.complete === false)
        else
            return filteredList;
    }
    return (
        <ul>
            {applyFilter(todos, filterValue).map((todo, index) => {
                return (
                    <ListItem
                        todo={todo}
                        key={index}
                        id={index}
                        checkComplete={switchComplete}
                        handleEditTodos={handleEditTodos}
                    />
                )
            })}
        </ul>
    )
}
