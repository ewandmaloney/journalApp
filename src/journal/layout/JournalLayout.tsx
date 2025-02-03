import { Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface JournalLayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} />
      {/* SideBar */}
      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
