import React from 'react';
import styled from "styled-components"
const Layout = styled.div`
  margin-top:10px;
  padding:20px;
`;
function Counter({ number, diff, onIncrease, onSetDiff, onIncreaseone, onDecreaseone, handleOnReset}) {
  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <Layout>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncreaseone}>+</button>
        <button onClick={onDecreaseone}>-</button><br/>
        <input type="number" value={diff} min="1" onChange={onChange} /><br/>
        <button onClick={onIncrease}>Add Amount</button>
        <button onClick={handleOnReset}>reset</button>
      </div>
    </Layout>
  );
}

export default Counter;