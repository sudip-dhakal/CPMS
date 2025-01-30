import UserProvider from "./context/userProvider.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
