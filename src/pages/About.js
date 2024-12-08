import React from "react";
import { useLocation } from "react-router-dom";
function About() {
  const location = useLocation();
  const { message ,name} = location.state || {}; // Default to an empty object if no state is passed

  return <h2>About Us
 {message ? <p>{message}</p> : <p>No message provided.</p>}
 {name ? <p>{name}</p> : <p>No name provided.</p>}
  </h2>;
}

export default About;
