import { useContext, useState } from "react";
import MyContext from "../../context/Context";
import rollBackIcon from "../../assets/rollback-11.svg";
import homeIcon from "../../assets/home-360.svg";
import "./game.css";

export default function Game() {
  const { quiz, fetchQuiz, navigate, loading, setLoading } = useContext(MyContext);
  const [ selectedAnswer, setSelectedAnswer ] = useState("");
  const [ estadoDoJogo, setEstadoDoJogo] = useState(true);
  const [ canSubmit, setCanSubmit ] = useState(true);

  const novoJogo = () => {
    setLoading(true);
    setEstadoDoJogo(true);
    setCanSubmit(true);
    setSelectedAnswer("");
    fetchQuiz();
  };

  const returnToMenu = () => {
    setLoading(true);
    navigate("/");
  };

  return(
    loading
    ?  <section className="loaderScreen">
      <span className="loader"></span>
    </section>
    : <section className="game">
      {
        estadoDoJogo
          ? <section className="inProgress">
          <h4>{quiz.question}</h4>
            <form className="options" onInput={ () => setCanSubmit(false) }>
              { quiz.answers.sort().map((resposta, index) => {
                return (<p key={index}><input type="radio" id={index} name="resposta" onClick={ () => setSelectedAnswer(resposta) } hidden /><label for={index}>{resposta}</label></p>)
              }) }
            </form>
            <button className="submit" disabled={ canSubmit } onClick={ () => setEstadoDoJogo(false) }>Enviar resposta</button>
          </section>
          : <section className="endGame">
            {
              selectedAnswer == quiz.correctAnswer
                ? <div>
                  <h1>Parabens, você acertou!</h1>
                  <h2>Você ganhou um/uma {quiz.prize}</h2>
                </div>
                : <div>
                  <h1>Você errou seu burro!</h1>
                  <h2>Não ganhou nada!</h2>
                </div>
            }
            <section>
              <button onClick={ () => novoJogo() } title="Jogar novamente" > <img src={rollBackIcon} width={50} alt="Jogar novamente"/> </button>
              <button onClick={ () => returnToMenu() } title="Voltar ao menu" > <img src={homeIcon} width={50} alt="Voltar para o menu" /> </button>
            </section>
          </section>
      }
    </section>
  );
};
