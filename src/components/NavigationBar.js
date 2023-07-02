import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { red, yellow, green, blue, purple, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b71c1c",
    },
    secondary: {
      main: "#6a1010",
    },
    text1: red[500],
    text2: yellow[500],
    text3: green[500],
    text4: blue[500],
    text5: purple[500],
    text6: grey[500],
  },
});
// Từ giờ sẽ có phần comment này để giúp b dễ nhìn và hiểu nó là gì nhé!
/*
 * @return: NavigationBar component - phần đầu của trang web (cái menu)
 * @example: <NavigationBar activePage="Exercices" />
 * @param activePage: string
 */
function NavigationBar({ activePage }) {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                key="home"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  backgroundColor:
                    activePage === "Home"
                      ? "rgba(30, 71, 67, 1)"
                      : "transparent",
                }}
              >
                Accueil
              </Button>
            </Link>
            <Link to="/qcm" style={{ textDecoration: "none" }}>
              <Button
                key="qcmentrainement"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  backgroundColor:
                    activePage === "QCMEntrainement"
                      ? "rgba(30, 71, 67, 1)"
                      : "transparent",
                }}
              >
                QCM d'entrainement
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;
