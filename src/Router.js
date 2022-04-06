import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Profile from "./routes/Profile";

function Routers() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default Routers;
