import React, { useState } from 'react';

const UseState = () => {
  /* UseState는 메세지와 메세지를 변경하는 게 쌍으로 있다고 보면 된다.
      message, setMessage는 사용자가 만들어서 쓸 수 있는 이름이다.
      useState메소드(?)를 쓰면 저 기능을 하는 2개의 이름을 만들어서
      사용하면 된다. */
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState(0);
  //예제 10)
  const [color, setColor] = useState('black');

  /* onEnter가 실행 되면 setMessage가 안녕하세요 로 수정된다. 
      message를 실행했을 때도 이 변경된 값이 적용된다. */
  const onEnter = () => setMessage('안녕하세요');
  const onExit = () => setMessage('안녕히 가세요.');

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <button onClick={onEnter}>입장</button>
      <button onClick={onExit}>퇴장</button>
      {/* 예제10) */}
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
      <br />
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <h1>{number}</h1>
    </div>
  );
};

export default UseState;
