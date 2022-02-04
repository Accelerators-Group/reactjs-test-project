import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getUserGithubRepos = async (username: string) => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return await axios.get(url);
};

export const searchUserGithubRepos = async (query: string) => {
  const url = `${BASE_URL}/search/repositories?q=${query}`;
  return await axios.get(url);
};
