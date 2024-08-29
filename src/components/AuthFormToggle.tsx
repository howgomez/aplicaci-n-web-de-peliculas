import React from "react";

interface AuthFormToggleProps {
  isRegister: boolean;
  onToggle: () => void;
}

const AuthFormToggle: React.FC<AuthFormToggleProps> = ({
  isRegister,
  onToggle,
}) => (
  <p>
    {isRegister ? "Already have an account?" : "Don't have an account?"}
    <button type="button" onClick={onToggle}>
      {isRegister ? "Login here" : "Register here"}
    </button>
  </p>
);

export default AuthFormToggle;
