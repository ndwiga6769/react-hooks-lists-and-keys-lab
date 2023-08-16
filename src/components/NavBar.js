import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const displayLinks = links.map((i) => (
  <a key={i} href={"#"+i}>{i}</a>
)
)
  return <nav>{displayLinks}</nav>;
}

export default NavBar;
