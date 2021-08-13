import { createTestClient } from "apollo-server-testing";
import { server } from "../src/middleware/apollo";

const { query } = createTestClient(server);
const testCase = {
  query: `
    query Pokemon($id: Int!) {
      getPokemon(id: $id) {
        id
        name
        abilities {
          ability {
            name
            url
          }
        }
        stats {
          base_stat
          stat {
            name
            url
          }
        }
      }
      getDescription(id: $id) {
        flavor_text
        language {
          name
          url
        }
        version {
          name
          url
        }
      }
    }
    `,
};
describe("app", () => {
  it("should return an object that matches Bulbasaur's data", async () => {
    const response = await query({
      query: testCase.query,
      variables: { id: 1 } || {},
    });

    expect(response).toMatchSnapshot();
  });

  it("should return an object that matches Starmie's data", async () => {
    const response = await query({
      query: testCase.query,
      variables: { id: 121 } || {},
    });

    expect(response).toMatchSnapshot();
  });

  it("should return an object that matches Lugia's data", async () => {
    const response = await query({
      query: testCase.query,
      variables: { id: 249 } || {},
    });

    expect(response).toMatchSnapshot();
  });

  it("should return an object that matches Altaria's data", async () => {
    const response = await query({
      query: testCase.query,
      variables: { id: 334 } || {},
    });

    expect(response).toMatchSnapshot();
  });

  it("should return an object that matches Dartrix's data", async () => {
    const response = await query({
      query: testCase.query,
      variables: { id: 723 } || {},
    });

    expect(response).toMatchSnapshot();
  });
  it("should return an object that matches Zacian's data", async () => {
    const response = await query({
      query: testCase.query,
      variables: { id: 888 } || {},
    });

    expect(response).toMatchSnapshot();
  });
});
