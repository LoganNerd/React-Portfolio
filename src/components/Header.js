import React, { useState } from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Home />;
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="Header" id="Header">
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
};

export default Header;

// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
