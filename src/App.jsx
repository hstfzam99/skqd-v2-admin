import { BrowserRouter } from "react-router";
import { AppRoute } from './routes';
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes";
import { SnackbarProvider } from 'notistack';

function App() {
  return (

    <BrowserRouter>
      <SnackbarProvider maxSnack={3} disableWindowBlurListener>
        <ThemeProvider theme={appTheme}>
          <AppRoute />
        </ThemeProvider>
      </SnackbarProvider>
    </BrowserRouter>
  )
}

export default App
