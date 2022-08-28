export type Greetprops = {
  name: string;
  messageCount?: number;
  isLogin: boolean;
};

export type person = {
  first: string;
  last: string;
  age?: number;
};

export type fixedType = {
  status: "loading" | "fulfilled" | "error";
};

export type child = {
  childrenNode?: string;
  children?: React.ReactNode;
};

export type Click = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id?: number) => void;
};

export type AuthUser = {
  username: string;
  email: string;
};

