import { useState } from "react";
import { AuthUser } from "./All.Types";

export const UseState = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setLoginStatus(true);
    setUser({
      username: "Oladunmoue",
      email: "Oladunmoyeadeniyi@yahoo.com",
    });
  };

  const handleLogout = () => {
    setLoginStatus(false);
    setUser(null);
  };
  console.log(user);
  return (
    <div>
      {loginStatus
        ? `Welcome ${user?.username} and your email is ${user?.email}`
        : "Goodbye"}
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};
