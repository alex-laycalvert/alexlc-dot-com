import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dev from "./pages/Dev";
import OrgChartPage from "./pages/Dev/OrgChart";
import "./style.scss";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dev" element={<Dev />}></Route>
                <Route path="/dev/orgchart" element={<OrgChartPage />}></Route>
                <Route path="/*" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
