import { useState } from "react";
import { Routes , Route } from "react-router";

import './App.css'
import getQuiz from './services/fetchQuiz'
import HomePage from "./components/homePage/HomePage";
import Game from "./components/game/Game";

function App() {
  const [quiz, setQuiz] = useState("")

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/game' element={<Game />}/>
      </Routes>
    </>
  )
}

export default App
