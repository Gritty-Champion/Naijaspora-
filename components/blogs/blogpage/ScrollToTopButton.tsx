import { useEffect, useState } from "react";
import { RiArrowUpLine } from "@remixicon/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary-base text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-opacity duration-300"
          aria-label="Go to top"
        >
          <RiArrowUpLine className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
