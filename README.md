# Description

This is a skeleton of any react project. This specimen can be modified to build any application desired. To start building an application out of this project, follow the steps metioned below :

1. Clone this project :
```bash
  git clone https://github.com/kumarnik007/react_skeleton_project.git
```
2. Delete the `.git` directory present at the root of the project.
3. Rename the project directory from `react_skeleton_project` to `<Desired name for the project>`.
4. Open the renamed directory with VS Code.
5. Open a terminal and initialiaze a local git repository for this project.
```bash
  git init
```
6. Open the `index.html` from the `public` directory present at the root of this project.
7. Change the value of `title` tag in the `head` of the `index.html` from `react_skeleton_project` to `<Desired name for the project>`.
8. Open the `index.tsx` from the `src` directory present at the root of this project.
9. Change the value of the rendered `h1` tag inside `render` method from `<h1>Hello Pokemons!!</h1>` to `<h1>Hello <Desired title>!!</h1>`.
8. Open the `package.json` present at the root of this project.
9. Change the value of `name` from `specimen` to `Desired application name`.
10. Change the value of `homepage` from `.` to `https://<github user name>.github.io/<name of the application>`.
11. Change the value of `author` from `Nikhil Kumar` to `<your name>`.
12. If you want to later deploy your project to github, run the below command :
```bash
  npm install --save gh-pages
```
13. Stage all the files in the project directory for commit.
```bash
  git add .
```
14. Commit the changes to local git repository.
```bash
  git commit -m '<Some message>'
```
15. To make the project available on github, follow below steps :
    - Go to your repositories on github.
    - Click on the `+` sign to the left your profile picture on the top right corner.
    - Click on `New Repository`.
    - Put the project name used above step (3) in the `Repository field`.
    - Check the `Private` checkbox, if you want the repository to be visible only to you and some people whom you grant access.
    - Check the `Public` checkbox, if you want the repository to be visible to everyone in the internet.
    - Click the `Create Repository` button at the end.
    - Copy the repository https link, something of the form `https://github.com/kumarnik007/react_skeleton_project.git`.
    - Go back to VS Code and in terminal execute the below command :
      ```bash
        git remote add origin <REMOTE URL copied in previous step>
      ```
    - Rename the local git branch from `master` to `main`
      ```bash
        git branch -m main
      ```
    - Push the changes to github
      ```bash
        git push origin main
      ```
