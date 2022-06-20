import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nextStep, setNextStep] = useState({});
  const [maxDepth, setMaxDepth] = useState(0);
  useEffect(() => {
    fetch("/step1", {
      method: "GET",
      headers: {
        "craftsmen-api-key": "UGxlYXNlRG9uJ3RDaGFuZ2VUaGlzVmFsdWU=",
        "email": "mdrokon7773@gmail.com"
      },
    }).then(res => res.json()).then(data => setNextStep(data));

  }, [])


  const maximumDepth = (str) => {
    let max = 0;
    let total_max = 0;


    for (let i = 0; i < str?.length; i++) {

      if (str[i] == '<') {
        max++;

        if (max > total_max) {
          total_max = max;
        }

      } else if (str[i] == '>') {

        if (max > 0) {
          max--;
        }

      }
    }
    return total_max;
  }

  const handleSubmit = (answer) => {
    const depthDividedByTwo = Math.ceil((answer / 2));
    fetch("/step1", {
      method: "POST",
      headers: {
        "craftsmen-api-key": "UGxlYXNlRG9uJ3RDaGFuZ2VUaGlzVmFsdWU=",
        "email": "mdrokon7773@gmail.com"
      },
      body: { "depth": depthDividedByTwo }
    }).then(res => res.json()).then(data => setNextStep(data));
    console.log(depthDividedByTwo);
  }



  return (
    <div className="App">
      <p>{nextStep?.instruction}</p>
      <p>{maximumDepth(nextStep?.problem)}</p>
      <button onClick={() => handleSubmit(maximumDepth(nextStep?.problem))}>Submit Answer</button>

    </div>
  );
}

export default App;
