import supertest from "supertest";

describe("app", () => {
  it("Returns 200 when requesting app", async () => {
    const request = await supertest("http://localhost:4000/graphql");
    request.post("/graphql").expect(200);
  });
});
