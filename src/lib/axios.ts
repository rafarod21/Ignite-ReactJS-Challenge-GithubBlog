import axios from 'axios';

export const gitHubApi = axios.create({
  baseURL: 'https://api.github.com',
});

const USERNAME = 'rafarod21';
const REPO = 'Ignite-ReactJS-Challenge-GithubBlog';

export async function getUserInfos() {
  try {
    const response = await gitHubApi.get(`/users/${USERNAME}`);

    return response.data;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getIssues() {
  try {
    const response = await gitHubApi.get('/search/issues', {
      params: {
        q: `repo:${USERNAME}/${REPO}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getOneIssue(issueNumber: string) {
  try {
    const response = await gitHubApi.get(
      `/repos/${USERNAME}/${REPO}/issues/${issueNumber}`
    );

    return response.data;
  } catch (error) {
    console.log(error);

    return null;
  }
}
