import { FC, useState, FormEventHandler } from "react";
import { UserObj } from "..";

interface UserFormTypes {
  onUserAdd: (user: UserObj) => void;
}

const UserForm: FC<UserFormTypes> = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onUserAdd({ email, name });
    setEmail("");
    setName("");
  };

  return (
    <form className="m-[5rem] space-y-[2rem]" onSubmit={handleSubmit}>
      <div className="space-x-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border-black border-[1px]"
        />
      </div>
      <div className="space-x-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-black border-[1px]"
        />
      </div>

      <button className="border-[1px] p-[2rem]">submit</button>
    </form>
  );
};
export default UserForm;
