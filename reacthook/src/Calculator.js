import {useState, useEffect} from "react";

function Calculator() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [add, setAdd] = useState();
    const [sub, setSub] = useState();
    const [mul, setMul] = useState();
    const [div, setDiv] = useState();
    const saveNum1 = (e) =>{
        setNum1(parseInt(e.target.value))
    }
    const saveNum2 = (e) =>{
        setNum2(parseInt(e.target.value))
    }

    return(
        <div align="center">
        <h2>GCU Calculator</h2>
        <input type="text" value={num1} onChange={saveNum1}></input>
        <input type="text" value={num2} onChange={saveNum2}></input>

        <p>
            <button onClick={() => setAdd(num1+num2)}>Add</button> {add}<span>&nbsp;</span>
            <button onClick={() => setSub(num1-num2)}>Sub</button> {sub}<span>&nbsp;</span>
            <button onClick={() => setMul(num1*num2)}>Mul</button> {mul}<span>&nbsp;</span>
            <button onClick={() => setDiv(num1/num2)}>Div</button> {div}
        </p>
        </div>
    );
}

export default Calculator;