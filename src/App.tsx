// import React from 'react';
// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";
import { UseState } from "./components/UseState";
import { Input } from "./Input";

const people = {
  person1: {
    first: "Adeniyi",
    last: "Oladunmoye",
  },
  person2: {
    first: "Olusola",
    last: "Fawekun",
    age: 25,
  },
};

const lists = [
  { first: "Olaide", last: "Oladunmoye" },
  { first: "Adeola", last: "Fawekun" },
  { first: "Olusola", last: "Fawekun" },
  { first: "Oluwakemi", last: "Oladunmoye" },
  { first: "Similoluwa", last: "Awodeyi" },
];

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <UseState />
      <Greet name="Adeniyi" messageCount={20} isLogin={false} />
      <Person person={people.person1} />
      <Person person={people.person2} />
      <PersonList name={lists} />
      <Status status="loading" />
      <Heading>This is the heanding</Heading>

      <Oscar>
        <Heading>This is the heanding from Oscar</Heading>
      </Oscar>
      <Button
        handleClick={(e, id = 20) => {
          console.log("Button Clicked", id);
        }}
      />
      <Input
        value={name}
        styles={{ outline: "3px solid black", width: "200px", height: "50px" }}
        handleChange={(e) => setName(e.target.value)}
      />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
