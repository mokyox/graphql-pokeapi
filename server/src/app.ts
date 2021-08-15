import express from "express";
import { server } from "./middleware/apollo";

export const App = (): express.Application => {
  const app = express();
  app.use(server.getMiddleware());
  return app;
};
