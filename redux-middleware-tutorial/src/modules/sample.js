import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";
import { call, put, takeLatest } from "redux-saga/effects";
import { startLoading, finishLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

//1. 액션 타입 정의
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//2. thunk 함수 정의
export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

//제너레이터 함수 정의
// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST));
//   try {
//     //call 호출하면 Primose를 반환하는 함수를 호출하고
//     //응답을 기다린다.
//     //첫 번째 파라미터에는 함수를 두 번째 파라미터에는 해당 함수에
//     //포함될 매개변수를 넣어준다.
//     //api.getPost(action.)
//     const post = yield call(api.getPost, action.payload);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data,
//     });
//   } catch (e) {
//     console.log(e);
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
//   yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga(action) {
//   yield put(startLoading(GET_USERS));
//   try {
//     const users = yield call(api.getUsers);
//     yield put({
//       type: GET_USERS_SUCCESS,
//       payload: users.data,
//     });
//   } catch (e) {
//     console.log(e);
//     yield put({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//     throw e;
//   }
//   yield put(finishLoading(GET_USERS));
// }

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

//3. 초기 상태 정의
const initialState = {
  post: null,
  users: null,
};

//4. 리듀서 함수 정의
const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
    }),
    [GET_USERS]: (state) => ({
      ...state,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
    }),
  },
  initialState
);

export default sample;
