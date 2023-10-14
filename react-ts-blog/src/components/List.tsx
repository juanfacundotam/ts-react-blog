interface Props {
    subs: Array<{
        nick: string,
        avatar: string,
        subMonths: number,
        description?: string,
      }>
}

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