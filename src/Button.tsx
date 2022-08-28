// export const Button = () => {
//   const handleClick = () => {
//     console.log("Button Clicked");
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Button</button>
//     </>
//   );
// };

import { Click } from "./components/All.Types";

export const Button = (props: Click) => {
  const { handleClick } = props;
  return <button onClick={handleClick}>Button</button>;
};
