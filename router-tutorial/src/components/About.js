import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const detail = searchParam.get("detail");
  const mode = searchParam.get("mode");

  const onToggledetail = () => {
    setSearchParam({
      mode,
      detail: detail === "true" ? false : true,
    });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParam({
      mode: nextMode,
      detail,
    });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>라우터 기능 사용하는 프로젝트</p>
      {/* search : ?포함한 쿼리스트링 값 */}
      {/* <p>{location.search}</p> */}
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button type="button" onClick={onToggledetail}>
        Toggle detail
      </button>
      <button type="button" onClick={onIncreaseMode}>
        mode + 1
      </button>
    </div>
  );
};

export default About;
