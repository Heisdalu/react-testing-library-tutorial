// my custom msw handler/seupServer

import {
  rest,
  RestContext,
  ResponseComposition,
  DefaultBodyType,
  RestRequest,
  PathParams,
} from "msw";
import { setupServer } from "msw/node";
interface obj {
  res(
    req: RestRequest<never, PathParams<string>>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext
  ): void;
  method: string;
  path: string;
}

export const createServer = (handlerConfig: obj[]) => {
  const handlers = handlerConfig.map((config) => {
    // @ts-ignore
    return rest[config.method || "get"](
      config.path,
      (
        _req: RestRequest<never, PathParams<string>>,
        res: ResponseComposition<DefaultBodyType>,
        ctx: RestContext
      ) => {
        return config.res(_req, res, ctx);
      }
    );
  });

  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen({ onUnhandledRequest: "bypass" });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
};
