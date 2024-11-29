import { useContext, useEffect } from "react"
import MyContext from "../../context/Context"

export default function HomePage() {
  const { fetchQuiz, setThemes, setPrizes } = useContext(MyContext);

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
    <>
      <section>
        <button onClick={ () => fetchQuiz() }>jogar</button>
        <button>configurações</button>
      </section>
    </>
  )
}