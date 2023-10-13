import { useMemo, useState } from "react";
import "./App.css";
import { createTheme, Button, CssBaseline, ThemeProvider } from "@mui/material";
import getDesignTokens from "./style/Mytheme";

function App() {
  const [mode, setmyMode] = useState(localStorage.getItem("theme") || "light");

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Button
          onClick={() => {
            localStorage.setItem(
              "theme",
              theme.palette.mode === "light" ? "dark" : "light"
            );

            setmyMode(theme.palette.mode === "dark" ? "light" : "dark");
          }}
          variant="contained"
          color="primary"
        >
          change
        </Button>
      </div>
      
    </ThemeProvider>
  );
}

export default App;
