import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

//1. 액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

//2. 액션 생성 함수 정의
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//마우스 클릭 이벤트가 payload 안으로 들어가지 못하도록
//두번째 파라미터를 () => undefined로 넣어줌
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

//제너레이터 함수 정의
function* increaseSaga() {
  //1초 대기
  yield delay(1000);
  //액션 디스패치
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  //takeEvery는 들어오는 모든 액션에 대해 특정 작업 처리
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  //takeLatest는 기존에 진행하던 작업을 취소하고
  //가장 마지막 실행된 작업만 수행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

//3. 초기 상태 정의
//초기 상태가 항상 객체일 필요는 없다.
const initialState = 0;

//4. 리듀서 함수 정의
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
