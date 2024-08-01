export {};

import { githubApiGetProject, getGithubTopics } from 'github-api-get';
import { GITHUB_PROJECT_TOPICS } from './consts.js';

async function realdataTopicsWithPathExpression() {
  const loginName = 'roebi';
  const projectName = '01-01-vanilla-HTML5-starter-page';
  const infoLog = true;
  const isProd = true;
  const githubTopics = githubApiGetProject(
    loginName,
    projectName,
    GITHUB_PROJECT_TOPICS,
    infoLog,
    isProd
  ); // as Promise<string[]>;

  const realGithubTopics = await githubTopics;
  console.group(
    'realGithubTopics, call of githubApiGetProject with constant GITHUB_PROJECT_TOPICS'
  );
  console.info('realGithubTopics');
  console.info(realGithubTopics);
  console.groupEnd();
}

async function getGithubTopicsfromgithub() {
  const loginName = 'roebi';
  const projectName = '01-01-vanilla-HTML5-starter-page';
  const infoLog = true;
  const isProd = true;
  // this call is deprecated, use githubApiGetProject with constant GITHUB_PROJECT_TOPICS
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd); // as Promise<string[]>;

  const realGithubTopics = await githubTopics;
  console.group('realGithubTopics, deprecated call getGithubTopics');
  console.info('realGithubTopics');
  console.info(realGithubTopics);
  console.groupEnd();
}

await realdataTopicsWithPathExpression();
console.info();
await getGithubTopicsfromgithub();
