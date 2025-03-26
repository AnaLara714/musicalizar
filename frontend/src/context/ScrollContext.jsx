import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollToId, setScrollToId] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (scrollToId && location.pathname === "/") {
      setTimeout(() => {
        const section = document.getElementById(scrollToId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          setScrollToId("");
        }
      }, 300);
    }
  }, [scrollToId, location.pathname]);

  return (
    <ScrollContext.Provider value={{ scrollToId, setScrollToId }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
