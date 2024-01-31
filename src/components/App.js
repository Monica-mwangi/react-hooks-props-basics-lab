import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const { bio, github, linkedin } = user;
  return (
    <div>
      <Links github={user.github} linkedin={user.linkedin} />
      <NavBar />
      <Home user={user} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
