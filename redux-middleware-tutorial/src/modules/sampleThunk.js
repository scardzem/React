import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

//1. 액션 타입 정의
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//2. thunk 함수 정의
export const getPostThunk = createRequestThunk(GET_POST, api.getPost);
export const getUsersThunk = createRequestThunk(GET_USERS, api.getUsers);
/*
export const getPost = (id) => async (dispatch) => {
  //요청 시작을 알림
  dispatch({ type: GET_POST });
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    //나중에 컴포넌트 단에서도 에러를 조회할 수 있도록 에러를 던져줌
    throw e;
  }
};
*/

/*
export const getUsers = () => async (dispatch) => {
  //요청 시작을 알림
  dispatch({
    type: GET_USERS,
  });

  try {
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};
*/

//3. 초기 상태 정의
const initialState = {
  post: null,
  users: null,
};

//4. 리듀서 함수 정의
const sampleThunk = handleActions(
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

export default sampleThunk;
