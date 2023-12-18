import { render, screen } from "@testing-library/react";
import Play from "@/pages/play";

const toContainRole = (container, count = 1) => {
  if (container.length === count) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () => "does not match array length",
  };
};

expect.extend({ toContainRole });

jest.mock("../components/Playing.tsx", () => {
  // skip this content
  return () => {
    return "File";
  };
});

test("can select", async () => {
  render(<Play />);
  console.log("divine");

  expect(await screen.findAllByRole("button")).toContainRole(2);
});
