import styled from "@emotion/styled";
import AuthLayout from "../layouts/AuthLayout";
import { Typography, Box } from "@mui/material";
import Signup from "../components/Signup";
import TrustPilotRating from "../components/TrustPilotRating";

const LeftBox = styled("div")({
  marginTop: 200,
});
const RightBox = styled("div")({});

const Login = () => {
  return (
    <div className="login">
      <AuthLayout>
        <div className="box-container">
          <LeftBox>
            <Typography variant="h3" fontWeight={600} color="white">
              Expert level Cybersecurity
            </Typography>

            <Typography variant="h3" fontWeight={600} color="white">
              in <span style={{ color: "#00bfa5" }}>hours</span> not weeks.
            </Typography>

            <Typography
              variant="h6"
              sx={{ mt: 4, mb: 2, fontWeight: 500 }}
              color="white"
            >
              What’s included
            </Typography>

            <Typography sx={{ mb: 1 }} color="white">
              ✓ Effortlessly spider and map targets to uncover hidden security
              flaws
            </Typography>

            <Typography sx={{ mb: 1 }} color="white">
              ✓ Deliver high-quality, validated findings in hours, not weeks.
            </Typography>

            <Typography color="white">
              ✓ Generate professional, enterprise-grade security reports
              automatically.
            </Typography>

            <Box
              sx={{
                mt: 25,
              }}
            >
              <TrustPilotRating />
            </Box>
          </LeftBox>

          <RightBox>
            <Signup />
          </RightBox>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;
