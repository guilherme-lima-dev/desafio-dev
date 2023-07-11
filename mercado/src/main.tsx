import Login from './pages/login'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);