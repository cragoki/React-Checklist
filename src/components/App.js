import React from 'react'
import TodoItem from './TodoItem'
import checklist from '../content/checklist'
function App(){

    const listComponents = checklist.map(item => <TodoItem key = {item.id} details = {{name:item.name, id:item.id, value:item.value}}/>)

    return (
        <div className="container">
            {listComponents}
        </div>
    );
}

export default App;