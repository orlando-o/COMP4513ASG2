import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./views/loginPage";
import GalleryView from "./views/galleryView";
import GenreView from "./views/genreView";
import PaintingView from "./views/paintingView";
import ArtistView from "./views/artistView";
import "./App.css";

function App() {
  const navigate = useNavigate(); // https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
  function redirect(target) {
    navigate(`/${target}`);
  }

  return (
    <main>
      <Routes>
        // https://www.w3schools.com/react/react_router.asp
        <Route index element={<LoginPage redirect={redirect} />} />
        <Route path="gallery" element={<GalleryView redirect={redirect} />} />
        <Route path="artist" element={<ArtistView redirect={redirect} />} />
        <Route path="genre" element={<GenreView redirect={redirect} />} />
        <Route path="painting" element={<PaintingView redirect={redirect} />} />
      </Routes>
    </main>
  );
}

export default App;
