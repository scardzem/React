import React, { useReducer } from 'react';

function reducer(state, action) {
  //리듀서함수는 action.type에 따라 동작을 정의할 수 있음
  //useReducer는 action.type을 정의하지 않아도 됨
  //(나중에 배울)리덕스의 리듀서는 action.type을 반드시 정의해야 됨

  switch (action.type) {
    case 'INCREASE':
      return { value: state.value + 1 };
    case 'DECREASE':
      return { value: state.value - 1 };
    default:
      return state; //현재상태 리턴
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>현재 값은 {state.value}입니다.</p>
      {/*                   dispatch 부분의 객체가 action임 */}
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
    </div>
  );
};

export default UseReducer;
