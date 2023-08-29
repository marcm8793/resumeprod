import { FC, ReactNode } from "react";
import Provider from "@/lib/provider";
import LoginBtn from "@/components/LoginButton";

interface AuthlayoutProps {
  children: ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Provider>
        {children}
        <LoginBtn />
      </Provider>
    </div>
  );
};

export default Authlayout;
