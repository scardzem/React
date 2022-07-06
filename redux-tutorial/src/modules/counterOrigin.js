//1. 액션 타입을 정의한다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//2. 액션 생성 함수를 정의한다.
export const increaseOrigin = () => ({ type: INCREASE });
export const decreaseOrigin = () => ({ type: DECREASE });

//3. counter 모듈의 초기상태를 정의한다.
const initialState = {
  number: 0,
};

//4. 리듀서 함수를 정의한다.
function counterOrigin(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counterOrigin;
