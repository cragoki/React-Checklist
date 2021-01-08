import React from 'react'

function TodoItem(props){
    return(
        <div className="checkbox-container">
            <input type="checkbox" id={props.details.id} name={props.details.name} value={props.details.value}/>
            <label htmlFor={props.details.id}> {props.details.value}</label>
        </div>
    )
}
export default TodoItem