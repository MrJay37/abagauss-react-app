<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Abagauss: React App

Welcome to the program. This repository is going to be the remote origin for all of your work. Eventually, this repository will also be part of continuous deployment solutions.

## How do I use this repository?

Step 1: Go into project folder (replace path below with your project's path)
```shell
cd path/to/your/project
```

Step 2: Create a Git repository (Skip this step if you have already initialized a git repository)
```shell
git init
```
Step 3: Commit any new changes
```shell
git add .
git commit -m "New changes"
```
[OPTIONAL] Step 4: If your default branch name is master, make sure to change it to main
```shell
git checkout -b main
git branch -D master
```
Step 5: Remove origin link (Skip this step if you have not set up a remote repository)
```shell
git remote remove origin
```
Step 6: Add new origin
```shell
git remote add origin https://github.com/MrJay37/abagauss-react-app
```
Step 7: Pull code first (README.md can cause conflict)
```shell
git pull origin main --allow-unrelated-histories
```
[OPTIONAL] Step 8: If you get conflicts with README.md file, accept all changes from incoming file, do not retain changes from your README file, we will make those changes in the future. After resolving conflicts, do the following
```shell
git add .
git commit -m "README merged from remote"
```

Step 9: Push code to remote
```shell
git push origin main
```
Step 10: Go to [remote](https://github.com/MrJay37/abagauss-react-app) and check if your code is present

Step 11: Go back to your terminal and change branch to a feature branch
'feature-dev' is an example name, you can call it feature-whatever-you-want
Feature should be present in the beginning, that's how we recognize that that branch is
meant to be developed on
```shell
git checkout feature-dev
```

For your information, other types of prefixes that we'll use are  
* `bug-`
* `qa-`
* `production-`
* `stage-`

Step 12: Push your feature branch to remote (Replace {BRANCH_NAME} with your branch name set above)
```shell
git push origin {BRANCH_NAME}
```

Step 13: Go to [remote](https://github.com/MrJay37/abagauss-react-app) and check if your branch is present with relevant code.  
After you're done with making changes, you can run the following  commands to push code to remote  
(Replace WRITE MESSAGE HERE with something you find meaningful about the development)
```shell
git add .
git commit -m "WRITE MESSAGE HERE"
git push origin {BRANCH_NAME}
```

Step 14: Going forward, any development you do will go on this branch, please do not develop directly on main branch. We will have to revert commits if they're made on the main branch in your laptop. The main branch will have a lot of use in other projects so we cannot directly push to that branch
>>>>>>> 4c1b6cebd51066fe9aa7bbd56c71a852ca8c8e1b
