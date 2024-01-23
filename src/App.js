// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import NavigationBar from "./component/NavigationBar";
import LoginForm from "./component/LoginForm";
import Dashboard from "./component/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <Router>
        <ThemeProvider>
      <AuthProvider>
          <NavigationBar/>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
            />
        </Routes>
      </AuthProvider>
        </ThemeProvider>
    </Router>
  );
}

export default App;
