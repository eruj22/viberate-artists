import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ArtistInfo from "./pages/ArtistInfo";
import Home from "./pages/Home";
import "./style/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":id" element={<ArtistInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
