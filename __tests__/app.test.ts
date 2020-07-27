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
          is_hidden
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
  variables: {
    id: 1,
  },
};
describe("app", () => {
  it("should return an object that matches Bulbasaur's data", async () => {
    const response = await query({
      query: testCase.query,
      variables: testCase.variables || {},
    });

    expect(response).toMatchSnapshot();
  });
});
