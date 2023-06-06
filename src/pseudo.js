// STRUCTURE

// users
//     userId
//         userName: "Mary90",
//         goals
//             goal01
//                 title: "Run 5k",
//                 duration: 30,
//                 category: "physical health",
//                 description: "some random description",
//                 status: onGoing
            
//             goal02
//                 title: "Read for 30 minutes",
//                 duration: 60,
//                 category: "mental health",
//                 description: "some random description",
//                 status: on-going
            
//             goal03
//                 title: "Limit social media to 1 hour",
//                 duration: 14,
//                 category: "mental health",
//                 description: "some random description",
//                 status: onGoing
            
//             goal04
//                 title: "Go to the gym",
//                 duration: 7,
//                 category: "physical health",
//                 description: "some random description",
//                 status: completed

//     userId
//         userName: "guest4672",
//         goals
//             goal01
//                 title: "swim 25 laps",
//                 duration: 120,
//                 category: "physical health",
//                 description: "some random description"
//                 status: completed
            
//             goal02
//                 title: "draw for 30 min a day",
//                 duration: 21,
//                 category: "physical health",
//                 description: "some random description"
//                 status: completed


// // PSEUDOCODE
// App.js 
//     1. Loading animation while page loads (stretch goal) 
//     2. Welcome.js
//     3. ContentPage.js

//         Welcome.js
//             1. Have the elements for landing page (h1, h2, form (for username input))
//             2. On page load - load landing page
//             3. On button click - make landing page display: none/visibility: hidden

//                 UserForm.js
//                     1. Handle button submit of "login" (to search firebase for existing user)
//                     2. Handle button submit for "create new user" (to add user input of username to firebase)
//                     3. Error handling - username cannot be empty, username is already taken

//         ContentPage.js
//             1. on UserForm submit, show ContentPage landing
//             2. Tracker.js
//             3. DailyGoal.js
//             4. GoalForm.js

//                 GoalForm.js / new goal
//                 1. On submit, create a new goal under goals node in firebase and save title, duration, category, description
//                 2. Error handling - title and duration cannot be empty, prompt to fill out section

//                 Tracker.js / current goals
//                 1. goals.forEach to access title, description, duration, and category
//                 2. Filter array to get goals whose status: onGoing
//                 3. For each, create <h3>, list of checkmarks (dependent on duration property), <p> of percentage of completion, and a remove button
//                 4. If remove button is clicked, remove from page
//                 5. If all checkmarks are clicked for a goal, remove from page

//                 DailyGoal.js / daily goals (stretch goal)
//                 1. Post today's date
//                 2. Map through goals, if status: onGoing, add goal to list of dailyToDo
//                 3. On check, update tracker to add 1 checkmark to the goal

//         Progress.js (stretch goal)
//             1. on button click, make ContentPage landing display:none, show Progress landing
//             2. <h2> "You have completed {array.length} goals so far!"
//             3. Filter goals array to only show goals completed (title + duration)




            