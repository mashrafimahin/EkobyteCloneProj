import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// context
import { ScrollProvider } from "./context/ScrollContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </StrictMode>,
);
