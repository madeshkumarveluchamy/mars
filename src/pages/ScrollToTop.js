import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation detects whenever the URL changes (e.g., from /home to /gallery)
  const { pathname } = useLocation();

  useEffect(() => {
    // Sound's Fix: Force the window to the absolute top (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the path changes

  return null;
};

export default ScrollToTop;