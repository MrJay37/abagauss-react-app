import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Roles from "./Roles";
import "./App.css";
import TopPage from "./TopPage";
import "./styles/Global.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import users from './lib/data/users.json'

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/login" element={<TopPage />} />
            {/* <TopPage /> */}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
