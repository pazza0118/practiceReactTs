import React from 'react';
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import { CustomHook } from './Components/CustomHook';
import { Redux } from './Components/Redux';
function App() {
  return (
    // <ClassComponent name="propName" age={10}/>
    // <FunctionComponent name="kaleb" age={14} />
    // <CustomHook />
    <Redux />
  );
}

export default App;
