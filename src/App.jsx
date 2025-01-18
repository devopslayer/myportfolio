import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            index
            element={
              <>
                <h1>Welcome to My Portfolio</h1>
                <p>This is a placeholder for the Home page content.</p>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <h2>About Me</h2>
                <p>This is a placeholder for the About page content.</p>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <h2>Projects</h2>
                <p>This is a placeholder for the Projects page content.</p>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <h2>Contact</h2>
                <p>This is a placeholder for the Contact page content.</p>
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
