import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createSelector } from "reselect";
import { setUser } from "./actions";
import { makeSelectUser } from "./selectors";
import styled from "styled-components";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserImage = styled.div`
  width: 6em;
  height: 6em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const UserEmail = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({ user }));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export const UserPage = () => {
  const { userId } = useParams();
  const { setUser } = actionDispatch(useDispatch());
  const { user } = useSelector(stateSelector);
  const history = useHistory();

  const fetchUser = async (id) => {
    const response = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((error) => console.log(error.message));

    setUser(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (userId && userId.length) {
      fetchUser(userId);
    }
  }, [userId]);

  if (!user) return <h1>Loading...</h1>;

  return (
    <>
      <UserContainer>
        <UserWrapper>
          <UserImage>
            <img src={user?.avatar} alt="" />
          </UserImage>
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserWrapper>
      </UserContainer>
      <button
        style={{ position: "absolute", top: "10px", marginLeft: "10px" }}
        onClick={() => history.push("/")}
      >
        Home
      </button>
    </>
  );
};
