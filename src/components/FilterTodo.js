import React from 'react'

export default function FilterTodo({ filterValue, setFilterValue }) {

    // const [filterValue, setFilterValue] = useState("all")

    const handleChange = (e) => {
        setFilterValue(e.target.value)

    }

    return (
        <div className="list filter">
            <label for="filters">Filter</label>
            <select onChange={handleChange} name="filters" id="filters" value={filterValue}>
                <option value="all">Show all</option>
                <option value="finished">Show finished</option>
                <option value="unfinished">Show unfinished</option>
            </select>
        </div>

    )
}
