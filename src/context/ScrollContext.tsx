// hook
import React, { useEffect, useState, type ReactNode } from "react";
//! context
// eslint-disable-next-line react-refresh/only-export-components
export const ScrollContext = React.createContext<{ scrolled: boolean }>({
  scrolled: false,
});
//! provider
export const ScrollProvider = (props: { children?: ReactNode }) => {
  // state
  const [scrolled, setScrolled] = useState<boolean>(false);
  // effect
  useEffect(() => {
    // func
    const func = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // event handles
    window.addEventListener("scroll", func as EventListener);
    // initialize
    func();
    // unmount
    return () => window.removeEventListener("scroll", func as EventListener);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrolled }}>
      {props.children}
    </ScrollContext.Provider>
  );
};
