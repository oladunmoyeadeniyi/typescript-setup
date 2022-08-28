import { fixedType } from "./All.Types";

export const Status = (props: fixedType) => {
  const { status } = props;
  let message;
  if (status === "loading") {
    message = "It is loading";
  }
  if (status === "fulfilled") {
    message = "Request fulfilled";
  }
  if (status === "error") {
    message = "Network Error";
  }
  return <div>Status - {message}</div>;
};
