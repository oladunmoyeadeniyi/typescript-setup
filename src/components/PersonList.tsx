import { person } from "./All.Types";
type List = { name: person[] };

const PersonList = (props: List) => {
  const { name } = props;
  return (
    <ul>
      {name.map((x) => (
        <li key={x.first}>
          Firstname: {x.first} <br /> Lastname: {x.last}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
