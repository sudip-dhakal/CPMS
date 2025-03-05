import UserProvider from "./context/UserProvider.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AdminProvider from "./context/AdminProvider.jsx";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <AdminProvider>
    <UserProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <App />
    </UserProvider>
  </AdminProvider>
);
