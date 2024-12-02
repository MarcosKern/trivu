import { useState } from "react";
import { Routes , Route } from "react-router";

import './App.css'
import HomePage from "./components/homePage/HomePage";
import Game from "./components/game/Game";
import Configs from "./components/configs/Configs";

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/configs' element={<Configs />}/>
      </Routes>
    </main>
  )
}

export default App
