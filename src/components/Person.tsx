import { person } from "./All.Types";

type details = { person: person };

export const Person = (props: details) => {
  const { person } = props;
  return (
    <div>
      My first name is {person.first} and my last name is {person.last}{" "}
      {person.age}
    </div>
  );
};
