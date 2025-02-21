import { BrowserRouter } from "react-router";
import { AppRoute } from './routes';
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes";

function App() {
  return (

    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <AppRoute />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
