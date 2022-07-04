import React from "react";
import { useParams } from "react-router-dom";

const data = {
  gogi: {
    name: "고기천",
    desciption: "비트캠프 강사",
  },
  hong: {
    name: "홍길동",
    decription: "의적",
  },
};

const Profile = () => {
  //전달된 URL 파라미터를 받아줌
  const params = useParams();

  const profile = data[params.name];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.decription}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
