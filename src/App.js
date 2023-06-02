import React from "react";
import { Photo } from "./components";

/**
 * Why should we learn about Class Components?
 - We can use Class Components to store/update state (CRUD-like functionality)
 - still supported and commonly used, older code bases use it 
 - Valid JSX 
 - Documentation still may use Class component syntax 
 - Hooks (ike useState) weren't introduced until  v16.8
 * 
 */

/**
  * What are lifecycles methods in React?
  - functions defined with predetermined names
  - we defined the function and React invokes it at a specific time
  - componentDidMount
  (waits for the component to mount first before executing)
  helpful for fetching data
  invoked immediately after the render function is invoked 
  - others: componentWillUnmount, componentDidUpdate
  */

// Defining a class component
class App extends React.Component {
  // need to add an constructor since this is a class

  constructor() {
    //inherit props from React.Components
    super(); // inherits all of the props from the super class
    // defining our state using this.state
    this.state = { catFact: "" };
  }

  //^^^simliar to const [catFact, setCatFact] = useState('') (This is for functional components of React! make sure to use this.state for class components)

  // define our componentDidMount()- this will execute immediately after the render function was invoked (basically when it hits the screen)
  componentDidMount() {
    // fetch and store data once the component is mounted
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        //How do I set the state to be the value of data.fact?
        this.setState({ catFact: data.fact }); // Make sure to add the new state as an object structure
      });
  }

  render() {
    // This allows us to render the return so that we can see this on the UI
    return (
      <div className="container p-5 d-flex flex-column align-items-center">
        <h1 className="mx-auto">{this.state.catFact}</h1>
        <Photo imgUrl="https://picsum.photos/350" />
      </div>
    );
  }
}

export { App };
