import styled from "@emotion/styled";
import { useState, type ReactNode } from "react";
import Sidebar from "../components/SideBar";

type propes = {
  children: ReactNode;
};

const StyleContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

const HomeLayout = ({ children }: propes) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <StyleContainer>
        <div className="left-con">
          <Sidebar open={open} toggleDrawer={toggleDrawer} />
        </div>
        <div className="right-con">
          <main>{children}</main>
        </div>
      </StyleContainer>
    </div>
  );
};

export default HomeLayout;
