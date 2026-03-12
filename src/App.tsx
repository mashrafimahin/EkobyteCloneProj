// hook
import { useContext } from "react";
// context
import { ScrollContext } from "./context/ScrollContext";
// styles
import Global from "./styles/GlobalPattern";
// components
import Navbar from "./component/Navbar";
// pages

function App() {
  // context
  const { scrolled } = useContext(ScrollContext);

  return (
    <>
      <Global />
      <Navbar scrolled={scrolled} />
      <div style={{ minHeight: "200vh" }}></div>
    </>
  );
}

export default App;
