import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createSelector } from "reselect";
import styled from "styled-components";
import { makeSelectUsers } from "./selectors";

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({ users }));

export const UsersList = () => {
  const { users } = useSelector(stateSelector);
  const history = useHistory();

  const isEmptyUsers = !users || (users && !users.length);
  if (isEmptyUsers) {
    return null;
  }

  const toUserPage = (id) => {
    history.push(`/user/${id}`);
  };

  return (
    <UsersContainers>
      {users.map((user, i) => (
        <UserWrapper key={user.id} onClick={() => toUserPage(user.id)}>
          <UserImage>
            <img src={user.avatar} alt="" />
          </UserImage>
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
        </UserWrapper>
      ))}
    </UsersContainers>
  );
};
