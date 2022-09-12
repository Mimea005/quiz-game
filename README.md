# Quiz Game

## Exercises

_taken from this [repo](https://github.com/pg6301-fall2022/web_development_and_api_design)_

- [ ] Exercise 01
  - A quiz game with pure html/js/css, no libraries
  - [ ] Create three files: 
    - [ ] `index.html`
    - [ ] `code.js`
    - [ ] `style.css`
  - [ ] In `code.js` create an array of quizzes with questions of your choice
    - _A quiz should be composed of: a question, 4 possible answers and an integer representing the index of the correct
      answer_
    - When a user open index.html, one random quiz should be displayed.
    - Each of the 4 answers should be a clickable button. 
    - Clicking the right answer should display a victory message, and then display a new random quiz.
    - On the other hand, clicking on a wrong answer should display an error message.
- [ ] Exercise 02
  - [ ] Create 3 folders, `public`, `src` and `test`
    - `public` contains the projects static assets like html, css, images, fonts...
    - `src` contains all javascript sourcecode
    -  `test` is where all the test will be contained
  - [ ] Move the html and css files over to public
  - [ ] Split `code.js` to two files: `index.js` and `quizzes.js`
  - [ ] `quizzes.js` should contain your quiz array
  - [ ] Create a new function in `quizzes.js` called `getRandomQuizzes`
    - It takes as input an integer `numberOfQuizzes` and returns a new array of unique quizzes chosen at random.
    - It should throw an exception when `numberOfQuizzes` is invalid.
  - [ ] start a node project `(npm/yarn/pnpm/...) init`
  - [ ] Add a web application bundler (parcel, webpack, snowpack or something else)
    - [ ] If babel is not added by the bundler you will need to add and configure it manually
  - [ ] Use the web bundler to build the project (usually `npm run {put bundler name here} build`)
  - [ ] Change index.html to point to the js file the build step produced
  - [ ] add jest to dependencies
  - [ ] add a jest test file to `tests` add tests to it to achieve 100% code coverage on quizzes.js (`npm run jest --coverage`)
  - [ ] add these scripts to `package.json`: 
    - `"test": "jest --coverage"`
    - `"dev": ` the command the bundler uses to build and optionally start a dev server
    - `"build": ` the command the bundler uses to build
- [ ] Exercise 03
- [ ] Exercise 04
- [ ] Exercise 05
- [ ] Exercise 06
- [ ] Exercise 07
- [ ] Exercise 08
- [ ] Exercise 09
- [ ] Exercise 10
- [ ] Exercise 11
- [ ] Exercise 12
- [ ] Extra

## TODO list

- [ ] Project setup
  - [ ] git init
  - [ ] add readme
    - [ ] add remote git repo on GitHub
- [ ] html/js/css quiz-game
- [ ] Project restructure
- [ ] React Client
- 