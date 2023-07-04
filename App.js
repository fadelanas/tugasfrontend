import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/movie/Create";
import Popular from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<Create />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/nowplaying" element={<NowPlaying />} />
          <Route path="/movie/toprated" element={<TopRated />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
