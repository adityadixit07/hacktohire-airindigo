import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlightDetailsPage from "./pages/FlightDetailsPage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Notification />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/flight/:id" component={<FlightDetailsPage />} />
          <Route path="*" element={<div>Not Found</div>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
