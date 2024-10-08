import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useStore from "./store/store";

//middleware
import checkAuth from "./utils/checkAuth";

//routes
import AuthorizedRoute from "./routes/AuthorizedRoute";
import RequiredAuth from "./routes/RequiredAuth";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import { useEffect } from "react";
function App() {
  const { isLoggedIn } = useStore();

  useEffect(() => {
    checkAuth();
  }, [isLoggedIn]);

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
