import { useEffect, useRef, useState } from "react";

const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false);

  const ref = useRef(null);

  // if user clicks a nav link or off the toggle button, the dropdown will close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
