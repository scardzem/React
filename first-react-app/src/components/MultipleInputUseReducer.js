import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const MultipleInputUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  const handleChange = (e) => {
    //이번에는 현재 이벤트가 발생한 input을 액션으로 사용함
    dispatch(e.target);
  };

  return (
    <div>
      <input name="name" value={name} onChange={handleChange}></input>
      <input name="nickname" value={nickname} onChange={handleChange}></input>
      <br />
      <b>이름: {name}</b>
      <br />
      <b>별명: {nickname}</b>
    </div>
  );
};

export default MultipleInputUseReducer;
