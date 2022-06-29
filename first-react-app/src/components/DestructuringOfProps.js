import React from 'react';

const DestructuringOfProps = (props) => {
  //비구조화 할당
  const { name, tel, children } = props;
  return (
    <div>
      <p>안녕하세요. 제 이름은 {name}</p>
      <p>전화번호는 {tel}</p>
      {/* App.js에 ChildrenOfComponent 사이에 있는 
          내용을 가져다 쓸 수 있다. */}
      <p>{children}</p>
    </div>
  );
};

DestructuringOfProps.defaultProps = {
  name: '기본이름입니다.',
  tel: '010-0000-0000',
};

export default DestructuringOfProps;
