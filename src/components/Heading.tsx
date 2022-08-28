import { child } from "./All.Types";

export const Heading = (props: child) => {
  const { childrenNode } = props;
  return <div>{childrenNode}</div>;
};
