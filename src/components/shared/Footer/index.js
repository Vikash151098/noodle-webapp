import React from "react";
import Menu from "../Menu";
const Footer = () => {
  return (
    <footer className="text-center">
      <hr />
      <Menu />
      <p>Copyright &copy; {new Date().getFullYear()} | Tata Elxsi</p>
    </footer>
  );
};

export default Footer;
