import { useEffect } from "react";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Player from "./pages/Player/Player.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailMovie from "./pages/DetailMovie/DetailMovie.jsx";
import Movies from "./pages/Movies/Movies";
import News from "./pages/News/News";
import TVShows from "./pages/TVShows/TVShows";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log("Logged In");
        navigate("/");
      } else {
        // console.log("Logged Out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/TVShows" element={<TVShows />} />
        <Route path="/news" element={<News />} />
        <Route path="/player/:id" element={<Player />}></Route>
        <Route path="/MovieDetail/:id" element={<DetailMovie />}></Route>
      </Routes>
    </div>
  );
};

export default App;
