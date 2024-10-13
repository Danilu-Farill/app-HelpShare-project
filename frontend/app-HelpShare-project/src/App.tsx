import { Route, Routes } from "react-router-dom";
import { LoginUser } from "./components/LoginUser";
import { UserProfile } from "./components/UserProfile";
import { Search } from "./components/Search";
import { FormOffers } from "./components/FormOffers";
import { FormUser } from "./components/FormUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="/search"element={<Search />} />
        <Route path="/register" element={<FormUser/>} />
        <Route path="/formOffer" element={<FormOffers />} />
        <Route path="/formUser" element={<FormUser />} />
      </Routes>
    </div>
  );
}

export default App;