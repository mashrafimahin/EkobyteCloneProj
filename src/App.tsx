// hook

// styles
import Global from "./styles/GlobalPattern";
// components
import Navbar from "./component/Navbar";
// pages

function App() {
  return (
    <>
      <Global />
      <Navbar />
      <div style={{ minHeight: "200vh" }}></div>
    </>
  );
}

export default App;
