import React, { useRef, useState } from 'react';

const UseRef = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;
  //handleChane가 이벤트 객체를 받아서 작동
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextInput = {
      ...inputs,
      [name]: value,
    };
    setInputs(nextInput);
  };

  const handleClick = () => {
    alert(name + ': ' + nickname);
    setInputs({
      name: '',
      nickname: '',
    });
    //확인버튼 누르면 focus가 nameInput(ref)으로.
    console.log(nameInput);
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={handleChange}
        value={name}
        ref={nameInput}
      ></input>
      <input
        name="nickname"
        placeholder="별명"
        onChange={handleChange}
        value={nickname}
      ></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default UseRef;
