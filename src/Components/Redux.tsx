// reducer
// combineReducer
// store
// MapStateToProps
// MapDispatchToProps
// action
// wrappedApp = connect()

import { connect } from "react-redux";
import { Dispatch, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

interface Person {
  name: string;
  age: number;
}
interface PersonAction {
  type: string,
  payload: string | number
}
const personReducer = (
  state: Person = { name: "defaultName", age: 15 },
  action: PersonAction
) => {
  switch (action.type) {
    case "CHANGENAME":
      return { name: action.payload, age: state.age };
    case "CHANGEAGE":
      return { name: state.name, age: action.payload };
    default:
      return state;
  }
};
const rootReducer = combineReducers({ person: personReducer });
export const store = configureStore({ reducer: rootReducer });

function MapStateToProps(state: {person: Person}) {
  return {
    name: state.person.name,
    age: state.person.age,
  };
}
function MapDispatchToProps(dispatch: Dispatch) {
  return {
    changeName: (name: string) =>
      dispatch({ type: "CHANGENAME", payload: name }),
    changeAge: (age: number) => dispatch({ type: "CHANGEAGE", payload: age }),
  };
}

function _Redux(props: Person): JSX.Element {
  return (
    <div>
      <h1>TS React-Redux Function Component</h1>
      <p>Name is {props.name}</p>
      <p>Age is {props.age}</p>
    </div>
  );
}
export const Redux = connect(MapStateToProps, MapDispatchToProps)(_Redux);
