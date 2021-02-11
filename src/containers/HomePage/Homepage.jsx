import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { setUsers } from "./actions";
import { makeSelectUsers } from "./selectors";
import { UsersList } from "./UsersList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({ users }));

const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

export const Homepage = () => {
  const { users } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());

  const fetchUsers = async () => {
    const response = await axios
      .get(`https://reqres.in/api/users`)
      .catch((error) => console.log(error.message));
    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <UsersList />
    </div>
  );
};
