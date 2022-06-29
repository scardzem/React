import React, { useState } from 'react';

const MultipleInput = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  // form이 객체여서 비구조화할당을 사용하여 username과 message로 분리
  const { username, message } = form;
  //onChange 이벤트에 할당될 함수 정의
  const handleChange = (e) => {
    const nextForm = {
      ...form,
      //event가 발생한 target에 입력한 값으로 name을 덮어쓰게 만듦
      //(이렇게 돼있는걸)username: '',
      //message: '',
      [e.target.name]: e.target.value,
      //(input에 jang이라고 써서 덮어쓰면)username: 'jang'
    };
    setForm(nextForm);
  };
  // input이 늘어나면 onChange 이벤트에 할당할 함수를 계속 생성해야됨
  // const [message, setMessage] = useState('');
  // const [username, setUsername] = useState('');

  /* 외부함수를 이용해서 위에서 했던 기능과 같은 기능 하도록 */
  /*
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
*/

  const handleClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        onChange={handleChange}
        value={username}
      ></input>
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

export default MultipleInput;
