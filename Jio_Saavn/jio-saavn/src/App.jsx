import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import AlbumDetails from "./pages/AlbumDetails"
// import {Login} from "./components/Login/Login"
export default function App() {
  return (
  //   <MusicContext.Provider
  //   value={{
  //     songs,
  //     setSongs,
  //     playMusic,
  //     isPlaying,
  //     currentSong,
  //     nextSong,
  //     prevSong,
  //     setSearchedSongs,
  //     searchedSongs,
  //   }}
  // >
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Home />}/>
      <Route path="/albums/:id" element={<AlbumDetails />} />
      {/* <Route path="/login" element={<Login/>}/> */}
      </Routes>
    </BrowserRouter>
    // </MusicContext.Provider>
  );
}

