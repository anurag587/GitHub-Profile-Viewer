import Search from "./Components/Search";
import UserInfo from "./Components/UserInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/user/:username" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
