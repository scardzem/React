import React, { useState } from 'react';

const EventPractice = () => {
  const [message, setMessage] = useState('');

  /* 외부함수를 이용해서 위에서 했던 기능과 같은 기능 하도록 */
  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    alert(message);
    setMessage('');
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        onChange={handleChange}
        value={message}
      ></input>

      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
