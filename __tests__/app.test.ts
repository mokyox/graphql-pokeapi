import supertest from "supertest";
import { App } from "../src/app";

describe("app", () => {
  const app = App();
  const request = supertest(app.listen(3000));
  it("Returns user with id = 10", async () => {
    console.log(request);
    await request.get(" http://localhost:3000/graphql").expect(200);
  });
});
