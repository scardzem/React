import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  //Promise를 이용한 비동기 통신
  // const handelClick = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
  //     setData(response.data);
  //   });
  // };

  //async와 await를 이용하여 동기 방식으로 처리
  const handelClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button type="button" onClick={handelClick}>
          불러오기
        </button>
      </div>
      {data && (
        <textarea
          readOnly={true}
          value={JSON.stringify(data, null, 2)}
        ></textarea>
      )}
    </div>
  );
}

export default App;
