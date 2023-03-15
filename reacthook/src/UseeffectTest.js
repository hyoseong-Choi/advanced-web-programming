import {useState, useEffect} from "react";

let i= 0;
const UseEffectTest = () =>{
    const [count, setCount] = useState(0);
    const countUp = () => setCount(count+1);
    useEffect(() => {
        i = i + 1;
        console.log("useEffect!!", count);
    },[]);
    return (
        <div>
            <p>{count}번 클릭!</p>
            <button onClick={countUp}>Click Me</button>
        </div>
    );
};

export default UseEffectTest