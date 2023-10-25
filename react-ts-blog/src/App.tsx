import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";
import { SubsResponseFromApi } from "./types";
import axios from "axios";

// interface Sub {
//   nick: string,
//   avatar: string,
//   subMonths: number,
//   description?: string,
// }

interface AppState {
  subs: Array<Sub>;
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
  const [subs, setSubs] = useState<AppState["subs"]>([]); //<Array<Sub>>  ||  <Sub[]>
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0); // podriamos poner solo number y listo, pero bueno, asi es más técnico
  const divRef = useRef<HTMLDivElement>(null); //importante ponerle un valor inicial, sino se queja

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  useEffect(() => {
    setSubs(INITIAL_STATE)
    // fetch("http://localhost:3001/subs").then(
    //   res => res.json()
    // ).then(subs => {
    //   console.log(subs)
    //   setSubs(subs)
    // });

    // const fetchSubs = (): Promise<SubsResponseFromApi> => {
    //   return axios.get("http://localhost:3001/subs").then((res) => res.data);
    // };

    // const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
    //   return apiResponse.map((subFromApi) => {
    //     const {
    //       months: subMonths,
    //       profileUrl: avatar,
    //       nick,
    //       description,
    //     } = subFromApi;

    //     return {
    //       nick,
    //       description,
    //       avatar,
    //       subMonths,
    //     };
    //   });
    // };
    // fetchSubs().then(mapFromApiToSubs).then(setSubs);
  }, []);

  return (
    <div className="App" ref={divRef}>
      <h1>Blog Subs</h1>
      <List subs={subs} />
      New subs: {newSubsNumber}
      {/* <Form onNewSub={setSubs}/> //pero no conviene pasar el estado */}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
