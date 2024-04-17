import Login from "./components/Login";
import Register from "./components/Register";
import { BgDrops } from "./assets/images/BgDrops";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BackgroundLayout from "./components/BackgroundLayout";

function App() {
  return (
    
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center -z-[10]"
      style={{ backgroundImage: `url(${BgDrops})` }}
    >
      <>
        {/* <BackgroundLayout></BackgroundLayout> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/background" element={<BackgroundLayout />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
