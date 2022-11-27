# Development: UIUX Candy Nutritional Calculator

### Link to Deployed Website

If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

This React webapp is an emulation of a nutrional calculator for the 15 most popular candies in the United States. Users can browse through a list of these candies and add them to the aggregating calculator to see how many calories, sugar, and saturated fat they are consuming.

The webpage is entirely dynamic. Adding, removing, filtering, and sorting can be done in real-time and there is no need to refresh the page while doing so. There is also a reset button to reset the user's filters and sorting selection.

### Usability Principles Considered

## Usability

I ensured the usability of this application by eliminating any chance of confusion with clearly labeled dropdown buttons and components. On top of this, I made sure that any combination of filtering/sorting works (only 1 sorting option at a time though).

## Learnability

By giving users the ability to easily add & remove items from the aggregating calculator, I ensured that users have a safe level of learnability when using this application.

## Memorability

The simple layout (utilizing the React Bootstrap flex layout) allows for user to easily remember where and how to access elements on the page.

### Organization of Components

The following lists out the component hierarchy:

src/
| - index.js (Entry point into the app)
| - App.js (Main Component)
| - Components/ (folder that holds all custom components)
|   - FilteredList.jsx (This wraps all other units and makes
use of a dynamic list)
|   - Sieve.jsx (This component handles all filtering and sorting
functionality)
|   - Calculator.jsx (This component is a wrapper for the calculator,
which aggregates the total amount of calories, sugar, and saturated fat)
|   - CalculatorItem.jsx (This component renders each item in the Calculator
This also handles quantity and removal from the Calculator)
|   - Candy.jsx (This handles the functionality of each individual candy card)
| - Data/ (folder that holds data)
|   - CandyData.js (This holds a single list with all necessary data
fields of all the candies, which can be imported easily)
public/assets/
| (This holds all the images used in the application)

### How Data is Passed Down Through Components
All the main state variables are managed in App.js:

- brand
- type
- cals
- sugar
- satfat
- candies

App.js also holds the following methods to handle those variables:

- setBrand()
- setType()
- setCals()
- setSugar()
- setSatFat()
- setCandies()

The FilteredList component additionally holds displayedData and setDisplayedData(), for displaying the item components in the main container.

Each of these state variables are passed down the hierarchy as props to be used dynamically.

### How the User Triggers State Changes
The user triggers state changes whenever the interact with something that affects the state variables listed above. For example, pressing the "Reset All" button affects all state variables immediately. I also make use of Functional React components, since they're a little simpler to trigger.
