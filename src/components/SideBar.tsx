import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
  styled,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineTask } from "react-icons/md";
import { IoIosQrScanner } from "react-icons/io";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

import Logo from "./Logo";
import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
}
const Circle = styled("div")({
  border: "10px solid #00bfa5",
  width: 30,
  height: 30,
  borderRadius: "50%",
  margin: "0px 5px",
  backgroundColor: "white",
});

const Sidebar = ({ open, toggleDrawer }: SidebarProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 70,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 70,
          transition: "width 0.3s",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <List>
          <ListItemButton
            sx={{
              marginLeft: -1,
            }}
          >
            <ListItemIcon>{open ? <Logo /> : <Circle />}</ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <RxDashboard size={21} />
            </ListItemIcon>
            <Link
              to="dashboard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {open && (
                <ListItemText sx={{ marginLeft: -3 }} primary="Dashboard" />
              )}
            </Link>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <MdOutlineTask size={21} />
            </ListItemIcon>
            {open && (
              <ListItemText sx={{ marginLeft: -3 }} primary="Projects" />
            )}
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <IoIosQrScanner size={21} />
            </ListItemIcon>
            {open && (
              <ListItemText sx={{ marginLeft: -3 }} primary="Schedule" />
            )}
          </ListItemButton>

          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <AiOutlineSchedule size={21} />
            </ListItemIcon>
            {open && (
              <ListItemText sx={{ marginLeft: -3 }} primary="Notifications" />
            )}
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <IoSettingsOutline size={21} />
            </ListItemIcon>
            {open && (
              <ListItemText sx={{ marginLeft: -3 }} primary="Settings" />
            )}
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <MdOutlineContactSupport size={21} />
            </ListItemIcon>
            {open && <ListItemText sx={{ marginLeft: -3 }} primary="Support" />}
          </ListItemButton>
        </List>
      </Box>

      <Box>
        <Divider />

        <Box
          sx={{
            p: 1.5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 35, height: 35, mr: open ? 1.5 : 0 }}>N</Avatar>

          {open && (
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" fontWeight={600}>
                Navin
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Security Lead
              </Typography>
            </Box>
          )}

          <IconButton onClick={toggleDrawer} size="small">
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
