import { FC } from "react";
import { UserObj } from "..";

interface UserListTypes {
  users: UserObj[];
}

const UserList: FC<UserListTypes> = ({ users }) => {
  const renderedUser = users.map((el, i) => (
    <div key={i} className="flex space-x-4">
      <div>{el.name}</div>
      <div>{el.email}</div>
    </div>
  ));
  return <div className="m-[3rem]">{renderedUser}</div>;
};
export default UserList;
