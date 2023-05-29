import React from "react"
export default class ClassComponent extends React.Component<{name:string, age:number}, {name:string, age: number}>{
  constructor(props: {name: string, age: number}){
    super(props)
    this.state = { name: "bob", age: 5}
  }
  render(): React.ReactNode {
    return <div>
      <p>Name is {this.state.name}</p>
      <p>Name is {this.state.age}</p>
      <p>Prop name is {this.props.name}</p>
      <p>Prop age is {this.props.age}</p>
    </div>
  }
}