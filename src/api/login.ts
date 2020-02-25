var base64 = require("base-64");

type GitHubConfig = {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
};

const config: GitHubConfig = {
  GITHUB_CLIENT_ID: "b40cf48949996edcb339",
  GITHUB_CLIENT_SECRET: "435ce958b3f8d6fc1b1deb6de5873c1be8cdc137"
};

const AUTH_URL_PATH: string = "https://api.github.com/authorizations";

type GitHubResponse = {
  token: string;
  message: string;
};

function gitHubLogin(name: string, pwd: string): Promise<string> {
  const bytes = name.trim() + ":" + pwd.trim();
  const encoded = base64.encode(bytes);

  return fetch(AUTH_URL_PATH, {
    method: "POST",
    headers: {
      Authorization: "Basic " + encoded,
      "User-Agent": "GitHub Issue Browser",
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/vnd.github.inertia-preview+json"
    },
    body: JSON.stringify({
      client_id: config.GITHUB_CLIENT_ID,
      client_secret: config.GITHUB_CLIENT_SECRET,
      scopes: ["user", "repo"],
      note: "not abuse"
    })
  }).then(response =>
    response.json().then((json: GitHubResponse) => {
      if (response.status < 400) {
        return json.token;
      } else {
        throw new Error(json.message);
      }
    })
  );
}

export { gitHubLogin };
