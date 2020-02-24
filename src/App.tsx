import React from "react";
import LoginForm from "./components/LoginForm";
import GitHubSearch from "./components/GitHubSearch";
import { ApolloProvider } from "@apollo/react-hooks";
import { configureAppoloClient } from "./api/apollo";

import "./styles.css";

type AppState = {
  isAuth: boolean;
};
type AppProps = {};

class App extends React.Component<AppProps, AppState> {
  token?: string;

  constructor(props: AppProps) {
    super(props);
    this.state = { isAuth: false };
  }

  login = (token: string) => {
    this.token = token;
    this.setState({ isAuth: true });
  };

  render() {
    return this.state.isAuth && this.token ? (
      <ApolloProvider client={configureAppoloClient(this.token)}>
        <GitHubSearch />
      </ApolloProvider>
    ) : (
      <LoginForm login={this.login} />
    );
  }
}

export default App;
