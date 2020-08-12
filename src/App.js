import React, { useState } from 'react';

import FormInput from "./components/FormInput"
import List from "./components/List"
import FilterTodo from "./components/FilterTodo"
import Footer from "./components/Footer"
import { DataProvider } from "./components/DataProvider"


function App() {
  const [filterValue, setFilterValue] = useState("all")
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <FormInput />
        <FilterTodo filterValue={filterValue} setFilterValue={setFilterValue} />
        <List filterValue={filterValue} />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
