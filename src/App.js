import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import ContactScreen from "./screens/ContactScreen";
import AboutUsScreen from "./screens/AboutUsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/contact-us" element={<ContactScreen />} exact />
        <Route path="/about-us" element={<AboutUsScreen />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
