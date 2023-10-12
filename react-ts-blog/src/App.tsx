import React, { useEffect, useState } from "react";
import "./App.css";


interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string,
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
  const [subs, setSubs] = useState<Array<Sub>>([]);  //<Sub[]>

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  }, []);

  return (
    <div className="App">
      <h1>Nuestros subs</h1>
      <ul>
        {subs.map((sub, index) => {
          return (
            <li key={index}>
              <img src={sub.avatar} alt={`Avatar de ${sub.nick}`} />
              <h4>
                {sub.nick} (<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
