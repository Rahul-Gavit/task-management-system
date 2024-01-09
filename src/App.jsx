import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center shadow-lg p-6 md:p-10 lg:p-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-violet-800">
        Task Management System
      </h1>
      <AddTask />
    </div>
  );
}

export default App;
