# Testing workflows


## Fork testing (on GitHub)

0. Setup your Google API Credentials on https://console.developers.google.com/
    - Credentials -> Create Credentials -> Service Accounts

1. Fork the Open Grants repo (or create a private repo and push to it)

2. Set up your secrets under the fork/settings:
   - GSHEET_PRIVATE_KEY
   - GSHEET_CLIENT_EMAIL 
   - SPREADSHEET_ID
   - MATRIX_TOKEN
   - MATRIX_CHANNEL_ID (for both matrix vars, refer to [this](https://github.com/fadenb/Matrix-Chat-Message) guide, W3F account is on 1Password)
   - ACTIONS_STEP_DEBUG: set this to true for more verbose logs on workflow runs
   - ACTIONS_RUNNER_DEBUG: similar as above, haven't tried it

3. Branch off from master. Create a PR with only 1 file added (e.g. `cp deliveries/.delivery_testing.md deliveries/.delivery_testing_2.md`, add & commit it). Different workflows are triggered on different conditions. Note: Push any changes to your fork's master branch before you branch off, because the workflow to run will be the one from master.

## Local testing

While it requires some assumptions & is somewhat limited in scope, it's possible to run local testing on some of the workflows

### Setup
0. Setup your Google API Credentials on https://console.developers.google.com/
    - Credentials -> Create Credentials -> Service Accounts
1. Follow the instructions for installing [act](https://github.com/nektos/act)
2. The act environment is configured via `.actrc` & `.env` files. For this repo, we set:
    - the docker image used for testing to `nektos/act-environments-ubuntu:18.04`, corresponding to GitHub's test environment. Probably not all features are necessary, but we rely for example on the presence of `jq` in the image for JSON parsing.
        ```
        echo "-P ubuntu-latest=nektos/act-environments-ubuntu:18.04" > .actrc
        ```
    - `ACT=true` environment variable. This way we can distinguish which steps to run
        ```
        echo "ACT=true" > .env
        ```
3. Pull the above mentioned docker image:
    ```
    docker pull nektos/act-environments-ubuntu:18.04
    ```

### Testing

4. Modify the `google_sheet_update.yml` to replace the `parse files` section with `local testing parse files` (since they have the same ID, they can't both be used in the yml or else GitHub will complain). They should both be there by default, it's just a matter of commenting one section out.
5. Create a sample pull request file:
    ```
    echo '{
        "pull_request": {
            "head": {
            "ref": "10e629ef2f090f55a52b693961de8f5e1206d900"
            },
            "base": {
            "ref": "10e629ef2f090f55a52b693961de8f5e1206d900"
            },
            "state": "open",
            "author": "mmagician",
            "number": 174,
            "body": "# Grant Application Checklist\n- [X] The [application-template.md](https://github.com/w3f/Open-Grants-Program/blob/master/applications/application-template.md) has been copied, renamed ( \"project_name.md\") and updated."
        }
    }' > .pr_event.json
    ```
6. ```
    act -s GSHEET_PRIVATE_KEY="$(< .gsheet_private_key)" -s GSHEET_CLIENT_EMAIL="$(< .gsheet_client_email)" -s SPREADSHEET_ID="$(< .spreadsheet_id)" -e .pr_event.json -j update_sheet
    ```
