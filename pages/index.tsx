import UserForm from "../components/UserForm";
import { useState } from "react";
import UserList from "../components/UserList";

export interface UserObj {
  name: string;
  email: string;
}

interface Obj {
  [key: string]: number;
}

export default function Home() {
  const [users, setUser] = useState<UserObj[]>([]);

  const onUserAdd = (user: UserObj) => [setUser([...users, user])];
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr className="border-black" />
      <UserList users={users} />
    </div>
  );
}
