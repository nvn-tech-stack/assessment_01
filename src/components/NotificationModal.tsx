import { Button, Modal, Box, Typography } from "@mui/material";
import NotificationCard from "./NotificationCard";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "4%",
  right: "3%",

  width: "25%",
  bgcolor: "white",
  boxShadow: 10,
  p: 4,
  borderRadius: 2,
  outline: "none",
};

type NotificationProps = {
  openNotification: boolean;
  handleCloseNotification: () => void;
};

function NotificationModal({
  openNotification,
  handleCloseNotification,
}: NotificationProps) {
  const [notificatonRead] = useState<boolean>(false);

  return (
    <div>
      <Modal
        open={openNotification}
        onClose={handleCloseNotification}
        slotProps={{
          backdrop: {
            invisible: true,
          },
        }}
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              pb: 1,
              mb: 2,
            }}
          >
            <Typography variant="body1">Notification</Typography>
            <Button onClick={handleCloseNotification}>Close</Button>
          </Box>

          <Box>
            <NotificationCard notificatonRead={notificatonRead} />
            <NotificationCard notificatonRead={true} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default NotificationModal;
