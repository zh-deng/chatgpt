import React from "react";
import "./App.css";
import { Chatbox, Footer, Hero, Navbar } from "./containers/index";

function App() {
  return (
    <div className="App">
		<Navbar />
		<Hero />
		<Chatbox />
		<Footer />
    </div>
  );
}

export default App;
