import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global";

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);


// +  Deploy complete!

// Project Console: https://console.firebase.google.com/project/chat-e3d99/overview
// Hosting URL: https://chat-e3d99.web.app