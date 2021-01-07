import React from 'react'

function TodoItem(){
    return(
        <div className="checkbox-container">
            <input type="checkbox" id="react" name="react" value="React"/>
            <label htmlFor="react"> React</label>
        </div>
    )
}
export default TodoItem