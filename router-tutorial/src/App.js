import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Mypage from "./components/Mypage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile/:name" element={<Profile />}></Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
