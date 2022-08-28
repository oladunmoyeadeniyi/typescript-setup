import React from "react";

type InputProps = {
  value: string;
  styles?: React.CSSProperties;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: InputProps) => {
  const { handleChange, value, styles } = props;
  return <input value={value} onChange={handleChange} style={styles}></input>;
};
