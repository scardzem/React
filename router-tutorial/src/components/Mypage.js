import React from "react";
import { Navigate } from "react-router-dom";

const Mypage = () => {
  const isLogged = false;

  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return <div>마이페이지</div>;
};

export default Mypage;
