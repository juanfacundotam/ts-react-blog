import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import {Sub} from "./types"

// interface Sub {
//   nick: string,
//   avatar: string,
//   subMonths: number,
//   description?: string,
// }

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "JosePerez",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=JosePerez",
    description: "Usuario con beneficios",
  },
  {
    nick: "TomasGutierrez",
    subMonths: 5,
    avatar: "https://i.pravatar.cc/150?u=TomasGutierrez",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);  //<Array<Sub>>  ||  <Sub[]>
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);  // podriamos poner solo number y listo, pero bueno, asi es más técnico



  useEffect(()=>{
    setSubs(INITIAL_STATE)
  }, []);

  return (
    <div className="App">
      <h1>Blog Subs</h1>
      <List subs={subs}/>
      <Form/>
    </div>
  );
}

export default App;
