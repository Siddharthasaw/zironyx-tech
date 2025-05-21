// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* All protected routes under Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="clients"   element={<Clients />} />
          {/* Add more pages here */}
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
