import { Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<AppLayout />} />
    </Routes>
  );
}

export default App;
