const core = require('@actions/core');
const github = require('@actions/github');


async function run() {
  try {
      const repository = core.getInput('repository');
      const owner = repository.split('/')[0];
      const repo = repository.split('/')[1];
      const pull_number = core.getInput('pull_number');
      
      core.info(`setting repository to ${repository}`);
      core.info(`setting owner to ${owner}`);
      core.info(`setting repo to ${repo}`);
      
      const token = core.getInput('token');
      const octokit = github.getOctokit(token);

      const { data: pullRequestCommits } = await octokit.pulls.listCommits({
          owner: owner,
          repo: repo,
          pull_number: pull_number,
      });

      core.info(`pullRequestCommits ${pullRequestCommits}`);
      const last_commit = pullRequestCommits[-1, pullRequestCommits.length - 1];
      core.info(`last_commit.sha: ${last_commit.sha}`);
      core.info(`last_commit.message: ${last_commit.commit.message}`);

      core.setOutput('LAST_COMMIT_SHA', last_commit.sha);
      core.setOutput('LAST_COMMIT_MESSAGE', last_commit.commit.message);
      
  } catch (error) {
      core.setFailed(error.message);
  }
}

run();
