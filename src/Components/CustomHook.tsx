import React, { useState } from "react";

// Custom Hook in TS
// Recall infers union by -> xxxx | xxxx ....
// Thus must return custom hooks using "as const" to tell TS to infer by -> [xxx1, xxx2] instead of (xxx1 | xxx2)[]
// The returning values also cannot be "void", whatever returned from custom hook must at least be "() => void"
  // So cannot do e.g. const handlerOff = setState("off") 

function useOnOrOff(){
  const [state, setState] = useState<String>("off");
  const eventHandlers = ():{ on:(()=>void), off:(()=>void), toggle:(()=>void) } => {
    return {
      on: () => {
        console.log("turning power on");
        setState("on");
      },
      off: () => {
        console.log("turning power off");
        setState("off");
      },
      toggle: () => {
        console.log("toggling power");
        if (state === "on") {
          setState("off");
          return;
        }
        setState("on");
      },
    };
  };
  return [state, eventHandlers()] as const;             // This is  the most important line in the code
}

export function CustomHook() {
  const [power, {on, off, toggle}] = useOnOrOff();
  return (
    <div>
      CustomHook
      <p>Power is {power}</p>
      <button onClick={on}>Turn on power</button>
      <button onClick={off}>Turn off power</button>
      <button onClick={toggle}>Toggle power</button>
    </div>
  );
}
