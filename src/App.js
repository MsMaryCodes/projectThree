import './App.css';
import firebase from "./firebase.js";
import { push, getDatabase, ref, onValue, remove } from 'firebase/database';
import { useState, useEffect } from 'react';
import GoalForm from './GoalForm.js';
// 1. Allow users to save goals + goal length onto page
// 2. Allow users to remove goals once complete
function App() {
  const [goals, setGoals] = useState({});
  // const [userGoal, setUserGoal] = useState("");
  // const [userLength, setUserLength] = useState();

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
        console.log(newState);
      }

      // for (let goalItem in data) {
      //   const goalData = {
      //     key: goalItem,
      //     information: data[goalItem]
      //   }
      //   newState.push(goalData);
      //   console.log(newState[1]);
      // }

    });
  });

  return (
    <div className="App">
      <div className="wrapper">
        <GoalForm />
      </div>
    </div>
  );
}

export default App;
