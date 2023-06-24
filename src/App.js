import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { StepperContext } from "./contexts/StepperContext";
import First from "./components/steps/First";
import Second from "./components/steps/Second";
import Third from "./components/steps/Third";
import Fourth from "./components/steps/Fourth";

function App() {
  
  const [currentStep, setCurrentStep]= useState(1);
  
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  
  const steps = [
 "Step 1",
 "Step 2",
 "Step 3",
 "Step 4"
  ];

 const displaySteps =(step)=>{
  switch(step){
    case 1:
      return <First/>
    case 2:
        return <Second/>
    case 3:
          return <Third/>
    case 4:
            return <Fourth/>
    default:

  }
 
 }

 const handleClick =(direction)=>{
  let newStep = currentStep;
  direction === "next" ? newStep++ : newStep--;
   if(newStep >0 && newStep <= steps.length ) 
   {
    setCurrentStep(newStep);
   }
 }

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      
      
      <div className="container horizontal mt-5 mb-12">
      <Stepper 
      steps= {steps}
      currentStep={currentStep}
      />
    <div className="my-10 p-10">
      <StepperContext.Provider value={{
        userData, 
        setUserData,
        finalData,
        setFinalData
      }}>
        {displaySteps(currentStep)}
      </StepperContext.Provider>
    </div>

      </div>
      
      <StepperControl
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      />
    </div>
  );
}

export default App;
