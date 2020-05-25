This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Note: this is a one-way operation. Once you `eject`, you can’t go back! ###

`1.Write the component which can take as a prop JSON with any nested level. Component has to display a tree with the same hierarchy as a passed JSON, ability to collapse or expand each level of hierarchy(if it has nested levels). Also there should be the button ''expand all'' (in case at least one level is collapsed) and in case a whole tree is expanded the button should change the name to ''collapse all'' with proper functionality.`

This component is `Tree.js`. JSON is passed as argument, the rest is realised in component itself. There are two examples with data as array and as object