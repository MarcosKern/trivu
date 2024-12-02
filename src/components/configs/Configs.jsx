import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/Context";
import trashIcon from "../../assets/trash-65.svg"
import "./configs.css";

export default function Configs() {
    const { navigate } = useContext(MyContext);
    const [themes, setThemes] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputTheme, setInputTheme] = useState("");

    useEffect(() => {
        if (localStorage.getItem("themes") == undefined) {
            localStorage.setItem("themes", ["geografia", "musica", "musica_internacional", "historia"]);
        }
        setThemes(localStorage.getItem("themes").split(","));
        setLoading(true)
    }, [])

    const deleteTheme = (theme) => {
        const newThemeList = themes.filter((selectedTheme) => selectedTheme != theme);
        setThemes(newThemeList);
        localStorage.setItem("themes", newThemeList);
    }

    const addTheme = (newThemeList) => {
        setThemes(newThemeList);
        localStorage.setItem("themes", newThemeList);
        setInputTheme("")
    }

    return loading && <section className="configs">
        <header><h1>configurações</h1></header>
        <section className="themesMenu">
            <section className="themes">
                {themes.map((theme) => <p key={theme}>
                    {theme.replaceAll("_", " ")}
                    <button className="deleteTheme" onClick={() => deleteTheme(theme)}><img src={trashIcon} alt="" width={20}/></button>
                </p>)}
            </section>
            <section className="addTheme">
                <input type="text" value={inputTheme} placeholder="Adicionar tema" onInput={({ target }) => setInputTheme(target.value)} />
                <button onClick={() => addTheme([...themes, inputTheme])} disabled={!inputTheme}> + </button>
            </section>
        </section>
        <button className="back" onClick={ () => navigate("/") }> Voltar para o menu </button>
    </section>
}