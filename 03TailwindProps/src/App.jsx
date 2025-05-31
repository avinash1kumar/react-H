import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    userName: "Avinash",
    age: 21,
  };

  // we can also pass this array as Props in card
  let newArr = [1, 2, 3];

  return (
    <>
      {/* In react we write className for class because class is a reserbe keyword */}
      <h1 className="bg-cyan-600 text-black p-4 rounded-2xl ">
        <span className="text-red-800">Tail</span>wind Test
      </h1>

      {/* <Card channel="Chai aur React" someObj={myObj}></Card> */}

      <div className="flex">
        <Card userName="Avinash" numberValue="No. 10. 2025"></Card>
        <Card userName="Rahul"></Card>
      </div>
    </>
  );
}

export default App;
