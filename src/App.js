import { Followers } from "./Components/Followers";
import { Following } from "./Components/Following";
import { Gists } from "./Components/Gists";
import Repos from "./Components/Repos";
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
          <Route exact path = "/user/:username/repositories" element={<Repos/>}/>
          <Route exact path = "/user/:username/followers" element={<Followers/>}/>
          <Route exact path = "/user/:username/followings" element={<Following/>}/>
          <Route exact path = "/user/:username/gists" element={<Gists/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
