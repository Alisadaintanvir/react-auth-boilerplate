import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useStore from "./store/store";
import Cookies from "js-cookie";
import axios from "axios";

//routes
import AuthorizedRoute from "./routes/AuthorizedRoute";
import RequiredAuth from "./routes/RequiredAuth";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  const { setIsLoggedIn } = useStore();

  return (
    <Router>
      <Routes>
        <Route element={<AuthorizedRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<RequiredAuth />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
