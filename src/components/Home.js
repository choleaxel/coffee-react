import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/ContactForm">
        <button>Contact Form</button>
      </Link>
      <Link to="/coffees">
        <button>Coffee List</button>
      </Link>
    </div>
  );
}

export default Home;