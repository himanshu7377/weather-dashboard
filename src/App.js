// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import NavigationBar from './component/NavigationBar';
import LoginForm from './component/LoginForm';
import Dashboard from './component/Dashboard';

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <NavigationBar /> */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
