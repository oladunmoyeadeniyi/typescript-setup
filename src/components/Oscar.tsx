import { child } from "./All.Types";
// type child = {
//   children: React.ReactNode;
// };

export const Oscar = (props: child) => {
  const { children } = props;
  return <div>{children}</div>;
};
