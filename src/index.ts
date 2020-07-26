import { App } from "./app";

const app = App();

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);
