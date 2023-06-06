import './App.css';
import firebase from "./firebase.js";
import { push, getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import GoalForm from './GoalForm.js';
// 1. Allow users to save goals + goal length onto page
// 2. Allow users to remove goals once complete
function App() {
  const [goals, setGoals] = useState([]);
  const [userGoal, setUserGoal] = useState("");
  const [userLength, setUserLength] = useState();

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const data = response.val();
      const newState = [];

      for (let goalItem in data) {

        const goalData = {
          key: goalItem,
          name: data[goalItem].name,
          length: data[goalItem].length
        }
        newState.push(goalData);
      }
      setGoals(newState);
    });

  }, []);

  const handleNameChange = (event) => {
    setUserGoal(event.target.value);
  }

  const handleNumChange = (event) => {
    setUserLength(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const database = getDatabase(firebase);
    const dbRef = ref(database);
    push(dbRef, {name: userGoal, length: userLength});
    setUserGoal("");
    setUserLength();
  }

  return (
    <div className="App">
      <div className="wrapper">
        <GoalForm 
          handleNameChange={handleNameChange}
          handleNumChange={handleNumChange}
          handleSubmit={handleSubmit}
        />

        <div className="goals">
          <ul>
            {goals.map((goal) => {
              return (
                <li id={goals[goal]}>
                  <p>{goal.name}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
