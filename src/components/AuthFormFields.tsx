import React from "react";

interface AuthFormFieldsProps {
  label: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthFormFields: React.FC<AuthFormFieldsProps> = ({
  label,
  type,
  value,
  placeholder,
  onChange,
}) => (
  <div>
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="w-full p-3 bg-transparent border border-gray-800 rounded-xl focus:outline-none focus:border-white" />
  </div>
);

export default AuthFormFields;