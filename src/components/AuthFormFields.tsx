import React from "react";

interface AuthFormFieldsProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthFormFields: React.FC<AuthFormFieldsProps> = ({
  label,
  type,
  value,
  onChange,
}) => (
  <div>
    <label>{label}:</label>
    <input type={type} value={value} onChange={onChange} />
  </div>
);

export default AuthFormFields;