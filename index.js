const core = require('@actions/core');
// const wait = require('./wait');
const github = require('@actions/github');


// most @actions toolkit packages have async methods
async function run() {
  try {
    // const ms = core.getInput('milliseconds');
    // core.info(`Waiting ${ms} milliseconds ...`);

    // core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    // await wait(parseInt(ms));
    // core.info((new Date()).toTimeString());

      // core.setOutput('time', new Date().toTimeString());
      const repository = core.getInput('repository');
      const owner = repository.split('/')[0];
      const repo = repository.split('/')[1];
      const pull_number = core.getInput('pull_number');
      
      core.info(`setting repository to ${repository}`);
      core.info(`setting owner to ${owner}`);
      core.info(`setting repo to ${repo}`);
      
      const myToken = core.getInput('token');
      const octokit = github.getOctokit(token);

      // await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}/commits', {
      //     owner: 'octocat',
      //     repo: 'hello-world',
      //     pull_number: 42
      // })

      const { data: pullRequestCommits } = await octokit.pulls.listCommits({
          owner: owner,
          repo: repo,
          pull_number: pull_number,
      });

      core.info(`pullRequestcommits ${pullRequestcommits}`);
      

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
