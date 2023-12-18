import {
  screen,
  render,
  getByRole,
  waitFor,
  logRoles,
} from "@testing-library/react";
import About from "@/pages/about";

test("test for label text", async () => {
  render(<About />);
  const labelText = screen.getByLabelText(/button/);
  const btn = screen.getByText(
    (c, e) => c.startsWith("but") && e?.tagName.toLowerCase() === "span"
  );
  expect(labelText).toBeInTheDocument();

  logRoles(labelText);

  //   screen.debug(ass);
});
