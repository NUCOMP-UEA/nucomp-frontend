import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./global.css";
import Routes from "./routes";

export function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}
