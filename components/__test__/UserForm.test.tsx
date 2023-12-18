import {
  render,
  screen,
  waitFor,
  act,
  getByRole,
} from "@testing-library/react";
import UserForm from "../UserForm";
import { userEvent } from "@testing-library/user-event";
import { UserObj } from "@/pages";

test("it shows", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  // console.log(button);

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
  // expect(button).toHaveClass("p-[2rem] border-[1px]", { exact: true });
});

test("check if the callback function works", async () => {
  const mock = jest.fn();

  const user = userEvent.setup();
  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  await user.type(nameInput, "divine");
  await user.type(emailInput, "divine@gmail.com");
  await user.click(button);

  // Log value after interaction

  expect(button).toHaveClass("active");
  // expect(nameInput).toHaveValue("divine");
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    email: "divine@gmail.com",
    name: "divine",
  });
});

test("triggers an empty string when button is clciked", async () => {
  const user = userEvent.setup();
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole<HTMLInputElement>("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  await user.type(nameInput, "divine");
  await user.type(emailInput, "divine@gmail.com");
  await user.click(button);
  // await user.clear(nameInput);
  // await user.clear(emailInput);

  const buttonQuery = screen.queryByRole("navigation");
  console.log(buttonQuery);
  

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
  expect(buttonQuery).toBeNull()

  // screen.debug();
});
