import React, { useState } from "react";

// export function FunctionComponent():JSX.Element{     // non-arrow function does NOT work with React.FC or React.FunctionalComponent
//   return <div>Hi</div>
// }

// export const FunctionComponent:React.FC = () => {  
//   return <div>Hi</div>
// }

export default function FunctionComponent(props: {  name: string;  age: number;}): JSX.Element{
  const [name, setName] = useState<string>("bob");
  const [age, setAge] = useState<number>(11);
  const [someState, setSomeState] = useState<{title:string, year:number}>({ title: "johns", year: 1978 });

  const increaseAge = () => {
    setAge(age + 1);
  };
  const increaseYear = () => {
    setSomeState({ title: someState.title, year: someState.year + 1 });
  };
  const addEToName = () => {
    setName(name + "e");
  };
  return (
    <div>
      <p>name {name}</p>
      <button onClick={addEToName}>Add e to name</button>

      <p>age {age}</p>
      <button onClick={increaseAge}>Increase age</button>

      <p>title {someState.title}</p>
      <p>year {someState.year}</p>
      <button onClick={increaseYear}>Increase year</button>

      <p>prop name {props.name}</p>
      <p>prop age{props.age}</p>
    </div>
  );
}
