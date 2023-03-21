import React from 'react';
import styled from "styled-components"
const Layout = styled.div`
  margin-top:10px;
  padding:20px;
`;
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff, onIncreaseone, onDecreaseone, handleOnReset}) {
  const onChange = e => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
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