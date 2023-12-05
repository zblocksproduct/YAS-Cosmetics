import React from "react";

import CosmaticsReward from "./pages/comatcisReward";
import Brush from "./pages/makeupBrush";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MakeupLooks from "./pages/makeLooks";
import Empty from "./pages/empy";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/discount" element={<Brush />} />
          <Route path="/makeup" element={<MakeupLooks />} />
          <Route path="/claim" element={<CosmaticsReward />} />
          <Route path="/" element={<Empty />} />
        </Routes>
      </Router>
    </div>
  );
}
