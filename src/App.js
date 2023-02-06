import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose="1000" theme="light" position="bottom-center" />
    </>
  );
}
