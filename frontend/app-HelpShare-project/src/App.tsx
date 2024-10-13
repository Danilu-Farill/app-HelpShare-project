import { Route, Routes } from "react-router-dom"
import { Login } from "./components/Login";
import { Register } from './components/Register';
import { Search } from "./components/Search";
function App() {
  return (
  <div className="App">
    <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register"element={<Register />} />
            <Route path="/search"element={<Search />} />
          </Routes>
  </div>
   
  )
}

export default App
