import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dev from "./pages/Dev";
import OrgChart from "./pages/Dev/OrgChart";
import DraggableFrame from "./pages/Dev/DraggableFrame";
import Cards from "./pages/Dev/Cards";
import "./index.scss";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dev" element={<Dev />}></Route>
                <Route path="/dev/orgchart" element={<OrgChart />}></Route>
                <Route
                    path="/dev/draggableframe"
                    element={<DraggableFrame />}
                ></Route>
                <Route path="/dev/cards" element={<Cards />}></Route>
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
