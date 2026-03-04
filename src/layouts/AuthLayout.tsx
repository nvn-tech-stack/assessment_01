import { type ReactNode } from "react";
import Logo from "../components/Logo";

type propes = {
  children: ReactNode;
};

const AuthLayout = ({ children }: propes) => {
  return (
    <div>
      <Logo colorName="#00bfa5" />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
