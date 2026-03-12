// hook
import { useContext } from "react";
// context
import { ScrollContext } from "./context/ScrollContext";
import { ResizeContext } from "./context/ResizeContext";
// styles
import Global from "./styles/GlobalPattern";
// components
import Navbar from "./component/Navbar";
// pages

function App() {
  // context
  const { scrolled } = useContext(ScrollContext);
  const { resize } = useContext(ResizeContext);

  return (
    <>
      <Global />
      <Navbar scrolled={scrolled} resize={resize} />
      <div style={{ minHeight: "200vh" }}></div>
    </>
  );
}

export default App;
