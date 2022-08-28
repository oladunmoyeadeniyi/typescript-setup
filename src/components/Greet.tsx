import { Greetprops } from "./All.Types";

export const Greet = (props: Greetprops) => {
  const { name, messageCount, isLogin } = props;
  return (
    <div>
      {isLogin
        ? `Welcome ${name}! You have ${messageCount} unread messages`
        : "Welcome Guest"}
    </div>
  );
};
