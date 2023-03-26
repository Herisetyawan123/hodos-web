import Home from "./pages/home"
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing/landing";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";

function App() {

  return (
    <Routes>
      <Route path="/" index element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
