import React from 'react';
import Example from './components/Example/Example';
import { data } from './data/Data';
import Result from './components/Example/Result';
import './components/Example/example.scss';

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0)
  const question = data[step];

  function onClickVariant(index){
    setStep(step + 1)

    if(index === question.correctIndex){
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {step !== data.length ? (
        <Example step={step} question={question} onClickVariant={onClickVariant}/> 
      ) : (
        <Result correct={correct}/>
      )}
    </div>
  );
}

export default App;
