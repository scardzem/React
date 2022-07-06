import { createAction, handleActions } from "redux-actions";

//1. 액션 타입을 정의한다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//2. 액션 생성 함수를 정의한다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//3. counter 모듈의 초기상태를 정의한다.
const initialState = {
  number: 0,
};

//4. 리듀서 함수를 정의한다.
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
