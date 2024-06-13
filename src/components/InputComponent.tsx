import React, { ReactElement } from "react";
import styles from "../styles/MovieTriviaPage.module.css";
type Props = {
  key: number;
  type: string;
  maxLength: number;
  value: string;
  disabled?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent: React.FC<Props> = ({
  key,
  type,
  maxLength,
  value,
  disabled,
  handleChange,
}): ReactElement => {
  return (
        <input 
          key={key}
          type={type}
          maxLength={maxLength}
          className={styles.inputBox}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
  );
};

export default InputComponent;
