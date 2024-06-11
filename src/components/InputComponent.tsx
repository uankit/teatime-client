import React, { ReactElement } from "react";

type Props = {
  key: number;
  type: string;
  maxLength: number;
  value: string;
  disabled: boolean;
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
    <div className="title-container">
        <input 
          key={key}
          type={type}
          maxLength={maxLength}
          className="input-box"
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
  );
};

export default InputComponent;
