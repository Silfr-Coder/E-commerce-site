import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import CheckoutPage from "./Components/CheckoutPage";
import Footer from "./Components/Footer";
import Audiobook from "./Components/Audiobook";
import { audiobookList } from "./Components/Audiobook";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // const navigateTo = (page) => {
  //   setCurrentPage(page);
  // };
  const headerItems = [
    { className: "header-logo-box", text: "LOGO" },
    { className: "header-username-box", text: "UserName" },
    { className: "header-credit-box", text: "Credit" },
    { className: "header-welcome-box", text: "Welcome, " },
    { className: "header-spend-summary-box", text: "Total" },
  ];
  const footerItems = [
    { className: "footer-home" },
    { className: "footer-top-of-page" },
  ];

  let appContent;
  switch (currentPage) {
    case "home":
      appContent = <HomePage />;
      break;
    case "checkout":
      appContent = <CheckoutPage />;
      break;
    default:
      appContent = <HomePage />;
  }

  return (
    <>
      <div className="App">
        {/* render header here */}
        <Header headerItems={headerItems} />
        {appContent}
        /** Render audiobooks here, getting the list of audiobook objects from
        Audiobook.js using .map to display each book on the list */
        {audiobookList.map((audiobook, index) => (
          <Audiobook
            key={index}
            title={audiobook.title}
            author={audiobook.author}
            bookLength={audiobook.bookLength}
            language={audiobook.language}
            summary={audiobook.summary}
          />
        ))}
        {/* display footer here */}
        <Footer footerItems={footerItems} />
      </div>
    </>
  );
}

export default App;
