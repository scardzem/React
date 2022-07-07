import { createAction, handleActions } from "redux-actions";

//1.액션 타입 정의
const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

//2. 액션 생성 함수 정의
export const startLoading = createAction(
  START_LOADING,
  //request 타입을 payload로 지정
  //payload: GET_POST, GET_USERS
  (requestType) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

//3. 초기 상태 설정
const initialState = {};

//4. 리듀서 함수 정의
const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;
