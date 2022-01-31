import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar/TopBar"
import LeftBar from "./components/LeftBar/LeftBar"
import Dashboard from "./components/Dashboard/Dashboard"


import {Link, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <TopBar />
      <LeftBar />
      <Dashboard />
      
    </>
  );
}

export default App;
