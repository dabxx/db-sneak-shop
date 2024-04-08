import "./App.css";
import Home from "@/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
