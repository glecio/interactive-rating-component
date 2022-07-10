import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home";
import Thankyou from "../src/pages/Thankyou";
import './index.css'
import Layout from "./pages/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/thankyou/:rating" element={<Thankyou />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

