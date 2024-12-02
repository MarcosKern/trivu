import { useContext, useEffect } from "react"
import MyContext from "../../context/Context"
import playIcon from "../../assets/play-47.svg"
import gearIcon from "../../assets/gear-30.svg"
import "./homePage.css"

export default function HomePage() {
  const { fetchQuiz, setThemes, setPrizes, navigate } = useContext(MyContext);

  useEffect(() => {
    if (localStorage.getItem("themes") == undefined) {
      localStorage.setItem("themes", ["geografia", "musica", "musica_internacional", "historia"]);
    }
    if (localStorage.getItem("prizes") == undefined) {
      localStorage.setItem("prizes", ["veiculo", "brinquedo", "movel", "utensilio_de_cozinha"]);
    }
    setThemes(localStorage.getItem("themes").split(","));
    setPrizes(localStorage.getItem("prizes").split(","));
  }, [])

  return(
    <section className="home">
      <section className="menu">
        <button onClick={ () => fetchQuiz() } title="Jogar" > <img src={ playIcon } alt="" height={50}/> </button>
        <button onClick={ () => navigate('/configs') } title="Configurações" ><img src={ gearIcon } alt="" height={50}/></button>
      </section>
    </section>
  )
}