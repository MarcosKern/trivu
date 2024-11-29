import React, { useState } from 'react';
import { useNavigate }  from "react-router";

import PropTypes from 'prop-types';
import MyContext from './context';
import getQuiz from '../services/fetchQuiz';

function Provider({ children }) {
  const [quiz, setQuiz] = useState();
  const [prizes, setPrizes] = useState();
  const [themes, setThemes] = useState();

  const navigate = useNavigate();

  const fetchQuiz = async () => getQuiz('GET', `getQuiz/${themes[Math.floor(Math.random() * themes.length)]}/${prizes[Math.floor(Math.random() * prizes.length)]}`)
    .then((data) => {
      setQuiz(data.data);
      navigate("/game");
    });

  const value = {
    fetchQuiz,
    quiz,
    setThemes,
    setPrizes,
    navigate,
  }

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;