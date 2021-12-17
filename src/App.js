
//////////////////calculator ////////////////////////////////////////
import { useState } from "react";
import './App.css';
// import { create, all } from 'mathjs'
// const config = {}
// const math=create(all, config)
import {evaluate} from "mathjs";

const App = () => {
  const [output, setOutput] = useState([]);
  const operators = ["+","-","*","/"]
  const data = [[7,8,9],[4,5,6],[1,2,3],[0,".","AC"]]

  const addHandler = (e) => { //onClick of add button
    const val=e.target.textContent
    const newArr = [...output]; //Adds every task in {todoList} to newArr.
    if (val=="AC") {
      setOutput([])
    } else {
      newArr.push(val); //add userInput of textbox to newArr (adds new task to list)
      setOutput(newArr.join("")); //sets todoList to newArray (updates frontEnd todoList with new list.)
    }
  };

  const sum = (e) => {
    const newArr = [...output]
    const summation = evaluate(newArr.join(""))
    setOutput([summation])
  }
  
  return (
  <div id="calcContainer">
    <div id="output">
      <div id="output2">
        {output}
      </div>
    </div>

    <div id="operators">
      {operators.map((operator, index) => {
        return (
          <div key={index}
            className="operator"> {/*If map function returns multiple elements,you only need to put a key on the parent.*/}
            <p className="text noGap" onClick={addHandler}>{operator}</p>
          </div>
        )
      })}
    </div>

    <div id ="container">
      <div> 
        {data.map((row) => (
            <div>
              {row.map(num => 
                <th 
                  className="numPadItem" 
                  key={num}>
                    <p className="text noGap" onClick={addHandler}>
                        {num}
                    </p>
                </th>
              )}
            </div>
          ))
        }
      </div>

      <div id="equals" onClick={sum}>
        =
      </div>
    </div>
  </div>
  )
}

export default App;