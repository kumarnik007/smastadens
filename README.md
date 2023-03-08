# Small-town-municipality

Implement the `App` with a home page to display a table with details of persons in an organisation. The `App` has a navigation bar with links. The `App` contains header with the title, seaarch bar and links for different tabs. There is an action bar which has some actions for the data being rendered in the table.
Static data from within the code has been used to display in tabular form. The data can be grouped as per the value of `Grupp` (Group) column, `Team` (team) column and `Tjänstetyp` (service type) column. The data can be sorted by any single column value either in ascending or descending order.

## Demo
https://sapnachoudhary06.github.io/small-town-municipality/

## Run Locally

Clone the project

```bash
  https://github.com/sapnachoudhary06/small-town-municipality.git
```

Go to the project directory

```bash
  cd small-town-municipality
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## 🛠 Skills
Javascript, TypeScript, HTML, CSS, SCSS, Bulma, React and hooks.


## Assumptions/Limitations
1. The navigation links, tabs links and action buttons are dummy links/buttons to the home page (#) as the required functionality on clicking them was not mentioned anywhere.
2. The data by default is grouped by `grupp` column value and then by `team` column value.
3. Static data has been used in the table.
4. Buttons in left and right part of actions bar have been given a scale-in effect on hover, just to indicate they are buttons.
5. The search bar is used only for the filtering rows based on namn (name).
6. Table data can only by grouped by `grupp`, `team` and `tjänstetyp` columns.
7. `Organisationshieraki` button in tabs bar is set to be active by default.


## Original Problem Statement

In this code test, you are asked to implement a static web page, following a UX/UI
wireframe as specified in the attached Figma file. This wireframe, as you will see,
contains a table with sorting and grouping functionality.
These are the guidelines you are asked to follow:

1. The web page can be static, meaning that you don’t need to build a backend,
but can simply use static data to display. If you choose to build a backend too,
that would be a bonus.
2. Use React and Typescript. You can use whatever packages or libraries you like.
Feel free to use or be inspired by this resource: https://www.material-reacttable.com/docs/examples/aggregation-and-grouping
3. Publish your final code in a GitHub repository that you can share with us. Do
not make the repository public. It should be kept private.
4. Share your result in one of the two following ways. We recommend option a.
a. It is encouraged to deploy your code on some deployment service, so
that you can share a live version of the web page that we can view and
interact with. Do not make this deployment of the web page public. It
should be kept private.
b. You can also share your code as-is, but in that case, you should make
sure to provide detailed instructions for us to run it ourselves on a local
environment.
5. You have 1 week to finish the code test, counting from when you received
these instructions. Please let us know if you would like to have more time.
There are 4 aspects that we are particularly interested in when evaluating your code:
1. How well you can follow a UX/UI wireframe, in terms of both look-and-feel as
well as functionality
2. Your proficiency in React as a framework and Typescript as a language
3. Your ability to work independently
4. Your strengths as a programmer – make sure to showcase your strengths!
