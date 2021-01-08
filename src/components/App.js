import React from 'react'
import TodoItem from './TodoItem'

function App(){
    return (
        <div className="container">
                <TodoItem
                details = {{name:"react", id:"react", value:"React"}}
                />

                <TodoItem
                details = {{name:"es", id:"es", value:"ES6"}}
                />

                <TodoItem
                details = {{name:"node", id:"node", value:"Node JS"}}
                />

                <TodoItem
                details = {{name:"ts", id:"ts", value:"TypeScript"}}
                />
                
                <TodoItem
                details = {{name:"mongo", id:"mongo", value:"Mongo DB"}}
                />
        </div>
    );
}

export default App;