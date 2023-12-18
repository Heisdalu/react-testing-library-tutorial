import { FC } from "react";
import { UserObj } from "../pages";

interface UserListTypes {
  users: UserObj[];
}

const UserList: FC<UserListTypes> = ({ users }) => {
  const renderedUser = users.map((el, i) => (
    <div key={i} className="flex space-x-4" data-testid="container">
      <div className="email" aria-label="user name" data-testid="user-name">
        {el.name}
      </div>
      <div
        className="password"
        data-testid="user-email"
        aria-label="user-email"
      >
        {el.email}
      </div>
    </div>
  ));
  return <div className="m-[3rem]">{renderedUser}</div>;
};
export default UserList;
