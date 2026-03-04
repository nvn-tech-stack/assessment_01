import { styled, Typography } from "@mui/material";

const LogoHeader = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  padding: "20px",
  alignItems: "center",
});

const Circle = styled("div")({
  border: "10px solid #00bfa5",
  width: 30,
  height: 30,
  borderRadius: "50%",
  margin: "0px 5px",
  backgroundColor: "white",
});

interface LogoProps {
  colorName?: string;
}

function Logo({ colorName = "#00bfa5" }: LogoProps) {
  return (
    <div>
      <LogoHeader>
        <Circle />
        <Typography sx={{ color: colorName }}>aps</Typography>
      </LogoHeader>
    </div>
  );
}

export default Logo;
