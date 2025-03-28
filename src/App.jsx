import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<GalleryView />} />
        <Route path="/" element={<ArtistView />} />
        <Route path="/" element={<GenreView />} />
        <Route path="/" element={<PaintingView />} />
      </Routes>
    </main>
  );
}

export default App;
