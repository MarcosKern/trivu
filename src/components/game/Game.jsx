import { useContext, useState } from "react"
import MyContext from "../../context/Context"

export default function Game() {
    const { quiz, fetchQuiz, navigate } = useContext(MyContext);
    const [ selectedAnswer, setSelectedAnswer ] = useState('');
    const [ estadoDoJogo, setEstadoDoJogo] = useState(true);
    const [ canSubmit, setCanSubmit ] = useState(true);

    const novoJogo = () => {
        setEstadoDoJogo(true);
        setCanSubmit(true);
        setSelectedAnswer('');
        fetchQuiz();
    }

    return(
        <section>
            {
                estadoDoJogo
                    ? <section>
                    <h4>{quiz.question}</h4>
                        <form className="options" onInput={ () => setCanSubmit(false) }>
                            { quiz.answers.sort().map((resposta, index) => {
                                return (<p key={index}><input type="radio" id={index} name="resposta" onClick={ () => setSelectedAnswer(resposta) }/><label for={index}>{resposta}</label></p>)
                            }) }
                        </form>
                        <button disabled={ canSubmit } onClick={ () => setEstadoDoJogo(false) }>Enviar resposta</button>
                    </section>
                    : <section>
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
                            <button onClick={ () => novoJogo() }>Jogar novamente</button>
                            <button onClick={ () => navigate('/') }>Voltar ao menu</button>
                        </section>
                    </section>
            }
        </section>
    )
}