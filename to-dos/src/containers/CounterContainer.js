import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import Counter from "../components/Counter";
import {increase, setDiff, increaseone, decreaseone, resetcounter} from '../modules/counter';

function CounterContainer(){
    const {number, diff} = useSelector(state=>({
        number: state.counter.number,
        diff: state.counter.diff
        
    }));

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onSetDiff = diff => dispatch(setDiff(diff));
    const onIncreaseone = () => dispatch(increaseone());
    const onDecreaseone = () => dispatch(decreaseone());
    const handleOnReset = () => dispatch(resetcounter());


    return( 
        <Counter
            number = {number}
            diff = {diff}
            handleOnReset = {handleOnReset}
            onIncrease = {onIncrease}
            onSetDiff = {onSetDiff}
            onIncreaseone = {onIncreaseone}
            onDecreaseone = {onDecreaseone}
            />
    );
}
export default CounterContainer;