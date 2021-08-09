# Metal Slug Maker

Have you ever played [Super Mario Maker](https://supermariomaker.nintendo.com/)? well, this is something similar, but instead of Super Mario Bros, we will build Metal Slug scenarios. More info about the game? check [Wikipedia](https://en.wikipedia.org/wiki/Metal_Slug)

## Project pre-requisites

-   NodeJS (Latest stable)
-   Git (Latest stable)
-   Text Editor or IDE

## Project setup

Every time there are changes to `package.json` file run command below for installing/updating any project dependency

```
npm install
```

## Run tests

Run tests for Katas (/katas)

```
npm run test:katas
```

Run tests for main project (/src)

```
npm test
```

## Run the server

Run the server on the development mode

```
npm run dev
```

Run the server on deployment mode

```
node src/main/server.js
```

## Dependencies

## Development process

1. Create branch with the following format for the name: \<your name\>/\<kata or feature name being implemented\>
2. Commit changes in the branch created. For each commit created, make sure to add a meaningful commit message that describes the group of changes being committed. Limit=70 chars
3. Push branch to origin repository (Github). NOTE: Never push to "main" branch
4. Create a pull request (PR) in GitHub that points from your pushed branch to the target branch specified for the kata or feature development
5. Add reviewers and wait for review comments. Once PR is approved, it can be merged to target branch
6. After PR is merged, remove your branch from origin

## Code review

As authors, make sure that PRs have the following:

-   PR Title: Brief summary of changes being delivered by the PR. This should help reviewers to understand what is the goal of the changes
-   PR Description (Optional): If Title is not enough, use PR description to add details about changes being delivered in the PR.
-   A moderate number of changes. Goals for PRs should be kept as small as possible, so it's easier for reviewers to understand and reduce chances to introduce bugs hard to catch

As reviewers, a PR should be only approved if following conditions are met (In order of priority):

1. All checks pass (tests passing, no lint errors, code coverage >= 75%)
2. Changes accomplish the goal defined for the PR (Should make sense with the title)
3. Changes are covered by tests (There could be few exceptions)

## Git commands cheatsheet
- git clone \<repo url\>
- git config
- git status
- git branch \<branch name\>
- git checkout \<branch name\>
- git add \<file or folder\>
- git commit -m \<meaningful commit message\>
- git push
- git pull

## Database connection
1. Create a folder named `keys` at the same level of the project folder.
2. Ask for the database key.
3. Download the provided database key.
4. Store the key inside the folder `keys`.