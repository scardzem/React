import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";
import { bindActionCreators } from "redux";

const CounterContainerConnect = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//리덕스의 스토어의 상태값을 props로 넘겨주기 위한 함수 정의
//매개변수 state는 스토어에 저장되어 있는 상태 값
// const mapStatetoProps = (state) => ({
//   number: state.counter.number,
// });

// //리덕스의 액션생성함수를 props로 넘겨주기 위한 함수 정의
// //매개변수 dispatch는 스토어의 내장 함수
// const mapDispatchtoProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// //connect 함수로 이 컴포넌트가 리덕스와 화면 컴포넌트를
// //연결해주는 컴포넌트로 설정
// export default connect(mapStatetoProps, mapDispatchtoProps)(CounterContainer);

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch
    )
)(CounterContainerConnect);
