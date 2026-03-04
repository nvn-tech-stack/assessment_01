import {
  Box,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Link,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

import { RiEyeCloseLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const login = () => {
    setLogin(!isLogin);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        marginBottom:10
      }}
    >
      <Container
        sx={{
          background: "#fff",
          borderRadius: 4,
          p: 5,
          boxShadow: 5,
          width: 450,
        }}
      >
        <Typography variant="h5" fontWeight={500} align="center">
          {!isLogin ? "Sign up" : "Log in"}
        </Typography>

        <Typography align="center" sx={{ mt: 1, mb: 3 }}>
          Already have an account?{" "}
          <Link href="#" onClick={login} underline="hover">
            {!isLogin ? "Log in" : "Sign up"}
          </Link>
        </Typography>

        {!isLogin && (
          <TextField fullWidth label="First name*" margin="normal" />
        )}

        {!isLogin && <TextField fullWidth label="Last name*" margin="normal" />}

        <TextField fullWidth label="Email address*" margin="normal" />

        <TextField
          fullWidth
          label="Password (8+ characters)*"
          type={showPassword ? "text" : "password"}
          margin="normal"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <BsEye /> : <RiEyeCloseLine />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Box display="flex" alignItems="flex-start" mt={2}>
          <Checkbox size="small" />
          <Typography variant="body2">
            I agree to Apps <Link href="#">Terms & Conditions</Link> and
            acknowledge the <Link href="#">Privacy Policy</Link>
          </Typography>
        </Box>

        {isLogin ? (
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 10,
              backgroundColor: "#1f9d8f",
              "&:hover": { backgroundColor: "#17877a" },
            }}
            onClick={() => {
              navigate("home");
            }}
          >
            Login
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 10,
              backgroundColor: "#1f9d8f",
              "&:hover": { backgroundColor: "#17877a" },
            }}
          >
            Create account
          </Button>
        )}

        <Box mt={3} display="flex" justifyContent="space-between" gap={2}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#000",
              borderRadius: 10,
              "&:hover": { backgroundColor: "#222" },
            }}
          >
            <IoLogoApple size={30} />
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: 10,
            }}
          >
            <FcGoogle size={30} />
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#4267B2",
              borderRadius: 10,
              "&:hover": { backgroundColor: "#365899" },
            }}
          >
            <FaMeta size={30} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
