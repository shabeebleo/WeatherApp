import Login from "./components/Login";
import Register from "./components/Register";
import { BgDrops } from "./assets/images/BgDrops";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BgDrops})` }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
