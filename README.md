# get-PR-latest-commit v2

The GitHub Action to get the latest commit on pull request. This Action (written in JavaScript) wraps the "List commits on a pull request" API, and extracts the infomation of the latest commit from the response of the API.
Through this action, you can get the following information:

 * The commit message of the latest commit.
 * The commit SHA of the latest commit.
 * The path of a JSON file generated to store the context of the latest commit.
 
## Inputs
 
| Name          | Required | Description                                              | Default                                   |
| `repository`  | YES      | The name of the repository which the pull request is in. | `${{ github.repository }}`                |
| `pull_number` | YES      | The number of the PR                                     | `${{ github.event.pull_request.number }}` |
| `token`       | -        | Personal Access Token (PAT) used to authenticate         | `${{ github.token }}`                     |

## Outputs

| Name                    | Description                                                                  |
| `latest_commit_sha`     | The commit SHA of the latest commit.                                         |
| `latest_commit_message` | The commit message of the latest commit.                                     |
| `latest_commit_context` | The path of a JSON file generated to store the context of the latest commit. |



