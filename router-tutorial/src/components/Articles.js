import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

const Articles = () => {
  return (
    <ul>
      {/* Route의 children으로 들어가는 JSX 엘레먼트를 보여주는 역할 */}
      <Outlet />
      <ArticleItem id={1} />
      <ArticleItem id={2} />
      <ArticleItem id={3} />
    </ul>
  );
};

export default Articles;
