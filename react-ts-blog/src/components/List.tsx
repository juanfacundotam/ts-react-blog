import React from "react";

interface Props {
    // de esta manera podriamos hacerlo y lo bueno que ya lo controlamos nosotros.
    // children: string 
    // children: JSX.Element;
    // children: React.ReactNode
    // children: (name:string) => React.ReactNode

    subs: Array<{
        nick: string,
        avatar: string,
        subMonths: number,
        description?: string,
      }>
}

// export default function List({subs}: Props) {
// const List: React.FunctionComponent<Props> = ({subs}) => { //esto permite usar children, pero no tendria sentido, por eso gusta mas la forma anterior
const List = ({subs}: Props) => {
  return (
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
  );
}


export default List;