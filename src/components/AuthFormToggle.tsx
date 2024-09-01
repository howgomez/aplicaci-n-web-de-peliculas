import React from "react";

interface AuthFormToggleProps {
  isRegister: boolean;
  onToggle: () => void;
}

const AuthFormToggle: React.FC<AuthFormToggleProps> = ({
  isRegister,
  onToggle,
}) => (
  <p className="flex gap-2">
    {isRegister ? "Already have an account?" : "Don't have an account?"}
    <button type="button" onClick={onToggle} className="text-[#A458FF] hover:opacity-80 transition-all">
      {isRegister ? "Login here" : "Register here"}
    </button>
  </p>
);

export default AuthFormToggle;
