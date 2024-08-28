# Abagauss: React App

Welcome to the program. This repository is going to be the remote origin for all of your work. Eventually, this repository will also be part of continuous deployment solutions.

## How do I use this repository?

```shell
# Step 1: Go into project folder (replace path below with your project's path)
cd path/to/your/project

# Step 2: Create a Git repository (Skip this step if you have already initialized a git repository)
git init

# Step 3: Commit any new changes
git add .
git commit -m 'New changes'

# [OPTIONAL] Step 4: If your default branch name is master, make sure to change it to main
git checkout -b main
git branch -D master

# Step 3: Remove origin link (Skip this step if you have not set up a remote repository)
git remote remove origin

# Step 4: Add new origin
git remote set origin https://github.com/MrJay37/abagauss-react-app

# Step 5: Pull code first (README.md can cause conflict)
git pull origin main

# [OPTIONAL] Step 6: If you get conflicts with README.md file, accept all changes from incoming file, do not retain changes from your README file, we will make those changes in the future.

# Step 7: Push code to remote
git push origin main

# Step 8: Go to https://github.com/MrJay37/abagauss-react-app and check if your code is present

# Step 9: Go back to your terminal and change branch to a feature branch
# 'feature-dev' is an example name, you can call it feature-whatever-you-want
# Feature should be present in the beginning, that's how we recognize that that branch is
# meant to be developed on
git checkout feature-dev 

# FYI: Other types of prefixes that we'll use are qa-, bug-, production-, stage-

# Step 10: Push your feature branch to remote (Replace {BRANCH_NAME} with your branch name set above)
git push origin {BRANCH_NAME}

# Step 11: Go to https://github.com/MrJay37/abagauss-react-app and check if your branch is present with relevant code
# After you're done with making changes, you can run the following  commands to push code to remote (Replace WRITE MESSAGE HERE with something you find meaningful about the development)
git add .
git commit -m "WRITE MESSAGE HERE"
git push origin {BRANCH_NAME}

# Step 12: Going forward, any development you do will go on this branch, please do not develop directly on main branch. We will have to revert commits if they're made on the main branch in your laptop. The main branch will have a lot of use in other projects so we cannot directly push to that branch
```