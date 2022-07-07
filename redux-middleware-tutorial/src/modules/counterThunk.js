import { createAction, handleActions } from "redux-actions";

//1. 액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//2. 액션 생성 함수 정의
export const increaseThunk = createAction(INCREASE);
export const decreaseThunk = createAction(DECREASE);

//3. 초기 상태 정의
//초기 상태가 항상 객체일 필요는 없다.
const initialState = 0;

//thunk 함수 정의
export const increaseAsyncThunk = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increaseThunk());
  }, 1000);
};

export const decreaseAsyncThunk = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decreaseThunk());
  }, 1000);
};

//4. 리듀서 함수 정의
const counterThunk = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counterThunk;
