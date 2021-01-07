import React from 'react'

function App(){
    return (
        <div className="container">
            <div className="checkboxContainer">
                <input type="checkbox" id="react" name="react" value="React" />
                <label for="react"> React</label>
            </div>
            <div className="checkboxContainer">
                <input type="checkbox" id="node" name="node" value="Node JS" />
                <label for="node"> Node.JS</label>
           </div>
           <div className="checkboxContainer">
                <input type="checkbox" id="typeScript" name="typeScript" value="TypeScript" />
                <label for="typeScript"> TypeScript</label>
            </div>
            <div className="checkboxContainer">
                <input type="checkbox" id="mongoDB" name="mongoDB" value="MongoDB" />
                <label for="mongoDB"> MongoDB</label>
            </div>
        </div>
    );
}

export default App;