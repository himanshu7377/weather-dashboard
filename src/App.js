// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import NavigationBar from "./component/NavigationBar";
import LoginForm from "./component/LoginForm";
import Dashboard from "./component/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";



function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <NavigationBar/>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/dashboard"
             element={<Dashboard />}
            />
        </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
