import { render, screen, within } from "@testing-library/react";
import UserList from "../UserList";

const users = [{ email: "divineobi07@gmail.com", name: "divine" }];
test("render one ro per user", () => {
  const { container } = render(<UserList users={users} />);

  //   const list = screen.getAllByRole("");
  const getNames = container.querySelectorAll(".email");
  //   const getNames = within(screen.getByTestId("container")).getAllByTestId(
  //     "user-email"
  //   );
  expect(getNames).toHaveLength(1);
});
