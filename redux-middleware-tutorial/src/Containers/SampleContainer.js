import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
import { useEffect } from "react";
import { bindActionCreators } from "redux";

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  (state) => ({
    post: state.sample.post,
    users: state.sample.users,
    loadingPost: state.loading["sample/GET_POST"],
    loadingUsers: state.loading["sample/GET_USERS"],
  }),
  (dispatch) =>
    bindActionCreators(
      {
        getPost,
        getUsers,
      },
      dispatch
    )
)(SampleContainer);
