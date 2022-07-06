//스토어를 만들 때 리듀서를 하나만 지정할 수 있는데
//combineReducers라는 함수를 이용하면 여러개의
//리듀서 함수를 하나로 합칠 수 있다.
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
