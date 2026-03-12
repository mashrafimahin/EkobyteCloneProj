// hook
import React, { useEffect, useState, type ReactNode } from "react";
// context
// eslint-disable-next-line react-refresh/only-export-components
export const ResizeContext = React.createContext<{ resize?: number }>({
  resize: 0,
});
// provider
export const ResizeProvider = (props: { children?: ReactNode }) => {
  // state
  const [resize, setResize] = useState<number>(0);
  // effect
  useEffect(() => {
    const func = () => setResize(window.innerWidth);
    // event handles
    window.addEventListener("resize", func as EventListener);
    // umount
    return () => window.removeEventListener("resize", func as EventListener);
  }, []);
  // statement
  return (
    <ResizeContext.Provider value={{ resize }}>
      {props.children}
    </ResizeContext.Provider>
  );
};
