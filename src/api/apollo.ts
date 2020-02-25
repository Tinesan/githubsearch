import ApolloClient, { gql } from "apollo-boost";

const configureAppoloClient = (token: string): ApolloClient<{}> =>
  new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
  });

const GET_REPOSITORIES = gql`
  query Repositories(
    $name: String!
    $before: String
    $after: String
    $first: Int
    $last: Int
  ) {
    search(
      query: $name
      type: REPOSITORY
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
      repositoryCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      nodes {
        ... on Repository {
          id
          nameWithOwner
          description
          url
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
        }
      }
    }
  }
`;

export { configureAppoloClient, GET_REPOSITORIES };
