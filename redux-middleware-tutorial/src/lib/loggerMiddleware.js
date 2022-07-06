//미들웨어의 기본 구조
/* 
const loggerMiddleware = function loggerMiddleware(store) {
    return function(next) {
        return function(action){
            
        }
    }
}
미들웨어는 함수를 반환해주는 함수
*/
//store: 리덕스 스토어
//action: 디스패치된 액션
//next: dispatch(action)와 의미가 동일함
//      next(action) 리듀서 함수를 호출하기 전에
//      미들웨어로 먼저 전달됨
//      미들웨어가 여러개인 경우 계속해서 다음 미들웨어로 전달됨
//      다음 미들웨어가 없을 경우에 리듀서로 전달
const loggerMiddleware = (store) => (next) => (action) => {
  //action.type으로 log를 그룹화
  console.group(action && action.type);
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  //다음 미들웨어로 액션 전달
  //다음 미들웨어가 없을 경우 리듀서로 전달
  next(action);
  console.log("다음 상태", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
