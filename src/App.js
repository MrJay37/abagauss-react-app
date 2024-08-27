import "./App.css";
import TopPage from "./TopPage";
import "./styles/Global.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
