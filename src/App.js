import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { red, yellow, green, blue, purple, grey } from "@mui/material/colors";
import Home from "./pages/Home";
import QCMEntrainement from "./pages/QCMEntrainement";
import "./StyleJS.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#4db6ac",
    },
    secondary: {
      main: "#00897b",
    },
    text1: red[500],
    text2: yellow[500],
    text3: green[500],
    text4: blue[500],
    text5: purple[500],
    text6: grey[500],
  },
  typography: {
    fontFamily: "Torus",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qcm" element={<QCMEntrainement />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
