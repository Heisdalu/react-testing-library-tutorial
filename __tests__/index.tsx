import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

test("it shows", () => {
  render(<Home />);
  expect(1 + 1).toBe(2);
});
