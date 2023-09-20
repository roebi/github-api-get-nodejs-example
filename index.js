export {};

import { getGithubTopics } from 'github-api-get';

async function getGithubTopicsfromgithub() {
  const loginName = 'roebi';
  const projectName = '01-01-vanilla-HTML5-starter-page';
  const infoLog = true;
  const isProd = true;
  const githubTopics = getGithubTopics(loginName, projectName, infoLog, isProd); // as Promise<string[]>;

  const realGithubTopics = await githubTopics;
  console.group('realGithubTopics');
  console.info('realGithubTopics');
  console.info(realGithubTopics);
  console.groupEnd();
}

await getGithubTopicsfromgithub();
