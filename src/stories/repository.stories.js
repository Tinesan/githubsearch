import React from "react";
import { Repository } from "../components/Results";

export default { title: "Repository" };

const props = {
  nameWithOwner: "string",
  id: "string",
  description: "string",
  stargazers: {
    totalCount: 1
  },
  forks: {
    totalCount: 1
  },
  url: "string"
};

export const GithubRepo = () => <Repository {...props} />;
