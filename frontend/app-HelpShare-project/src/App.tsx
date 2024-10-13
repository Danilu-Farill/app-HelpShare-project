import { Route, Routes } from "react-router-dom";
import { LoginUser } from "./components/LoginUser";
import { UserProfile } from "./components/UserProfile";
import { Search } from "./components/Search";
import { FormUser } from "./components/FormUser"; // Importa correctamente

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<FormUser/>} />
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/formOffer" element={<FormView />} /> */}

      </Routes>
    </div>
  );
}

export default App;
