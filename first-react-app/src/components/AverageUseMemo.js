import React, { useMemo, useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균 값 계산중...');
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum / numbers.length;
};

const AverageUseMemo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList); //setlist로 덮어씌움
    setNumber(''); //number는 다시 빈칸으로
  };
  //                            리스트 호출, 리스트가 바뀔 때만([list])
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={handleChange}></input>
      <button onClick={handleClick}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값: {avg}</b>
      </div>
    </div>
  );
};
//이벤트에 매개변수가 있는 메소드를 전달(맵핑)할 때는 무조건 화살표 함수를 써야된다.
//평균값 부분에는 값을 표출만 하는거라서 {getAverage(list)} 이렇게 써서 표현한것.
export default AverageUseMemo;
