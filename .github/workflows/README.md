# Testing workflows

While it requires some assumptions & is somewhat limited in scope, it's possible to run local testing on some of the workflows

## Setup
0. Setup your Google API Credentials on https://console.developers.google.com/
- Credentials -> Create Credentials -> Service Accounts

1. Follow the instructions for installing [act](https://github.com/nektos/act)

2. The act environment is configured via `.actrc` & `.env` files. For this repo, we set:
- the docker image used for testing to `nektos/act-environments-ubuntu:18.04`, corresponding to GitHub's test environment. Probably not all features are necessary, but we rely for example on the presence of `jq` in the image for JSON parsing
- `ACT=true` environment variable. This way we can distinguish which steps to run

3. Pull the above mentioned docker image:
`docker pull nektos/act-environments-ubuntu:18.04`

### Local Testing

4. Modify the `google_sheet_update.yml` to replace the `parse files` section with `local testing parse files` (since they have the same ID, they can't both be used in the yml or else GitHub will complain). They should both be there by default, it's just a matter of commenting one section out

### Fork Testing
4. Fork the Open Grants Repo

5. Set up your secrets under the fork/settings:
- GSHEET_PRIVATE_KEY
- GSHEET_CLIENT_EMAIL 
- SPREADSHEET_ID 

6. Branch off from master. Create a PR with only 1 file added (e.g. `cp applications/workflow_testing.md applications/workflow_testing_2.md`, add & commit it). To trigger the workflow, you need to merge the PR (into your own fork). Note: Push any changes to fork's master branch before you branch off, because the workflow to run will be the one from master.

## Usage

```
act -s GSHEET_PRIVATE_KEY="$(< .gsheet_private_key)" -s GSHEET_CLIENT_EMAIL="$(< .gsheet_client_email)" -s SPREADSHEET_ID="$(< .spreadsheet_id)" -e .pr_event.json -j update_sheet
```
