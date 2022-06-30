import React from 'react';
import useInput from './useInput';
//MultipleInputUseReducer.js 복사해서 사용
const CustomHooks = () => {
  const [state, handleChange] = useInput({
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

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

export default CustomHooks;
