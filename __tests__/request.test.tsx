import Request from "@/pages/request";
import { API_URL } from "@/pages/request";
import { screen, render, waitFor } from "@testing-library/react";
import { createServer } from "@/mocks/server";
import { SWRConfig } from "swr/_internal";

describe("api mock test group", () => {
  createServer([
    {
      path: API_URL,
      method: "get",
      res: (req, res, ctx) => {
        console.log("success response");
        return res(ctx.status(200), ctx.text("divine"));
      },
    },
  ]);

  test("check if it shows valid returned api response", async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Request />
      </SWRConfig>
    );

    await screen.findByText("Loading");
    console.log("success");

    const btn = await screen.findByRole("heading", {
      name: /name/i,
    });
    expect(btn).toHaveTextContent("divine");
    screen.debug(screen.getByTestId("body"));
  });
});

describe("check if api breaks", () => {
  createServer([
    {
      path: API_URL,
      method: "get",
      res: (req, res, ctx) => {
        console.log("error response");

        return res(ctx.status(404), ctx.json({ message: "error" }));
      },
    },
  ]);

  test("display error component whenn endpoint breaks", async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Request />
      </SWRConfig>
    );
    console.log("error");
    await screen.findByTestId("error");
    screen.debug(await screen.findByTestId("error"));
  });
});


