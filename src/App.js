import React from "react";
import "./App.css";
import { Chatbox, Footer, Hero, Navbar, WikiInfo } from "./containers/index";

function App() {
  return (
    <div className="App">
		<Navbar />
		<Hero />
    <WikiInfo />
		<Chatbox />
		<Footer />
    </div>
  );
}

export default App;
