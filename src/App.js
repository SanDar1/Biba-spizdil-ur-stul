import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Box from "@mui/material/Box";

import Navbar from "./UI/Navbar/Navbar";
import Footer from "./UI/Footer/Footer";

import LoginPage from "./Components/LoginPage/LoginPage";
import MainPage from "./Components/MainPage/MainPage";
import Header from "./UI/Header/Header";

function App() {
  const isLogged = false

  return (
    !isLogged ?
      <>
        <Header />
        <Box
          sx={{
            padding: 5,
            marginLeft: 15
          }}
        >
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
        </Box>
        <Footer/>
      </>
      :
      <>
        <Navbar/>
        <Box
          sx={{
            padding: 5,
            marginLeft: 15
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/main" exact element={<MainPage/>}/>
            </Routes>
          </BrowserRouter>
        </Box>
        <Footer/>
      </>
  )
}

export default App;
