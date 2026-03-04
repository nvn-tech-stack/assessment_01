import { Box, Typography } from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { styled } from "@mui/material/styles";

const TrustWrapper = styled(Box)({
  color: "white",
});

export default function TrustPilotRating() {
  return (
    <TrustWrapper>
 
      <Box display="flex" alignItems="center" gap={1}>
        <StarOutlineIcon sx={{ color: "#00b67a", fontSize: 20 }} />
        <Typography
          variant="body1"
          sx={{ fontWeight: 500 }}
        >
          Trustpilot
        </Typography>
      </Box>

  
      <Typography
        variant="body2"
        sx={{ mt: 1 }}
      >
        Rated 4.5/5.0{" "}
        <Typography
          component="span"
          variant="body2"
          sx={{ opacity: 0.7, ml: 1 }}
        >
          (100k+ reviews)
        </Typography>
      </Typography>
    </TrustWrapper>
  );
}