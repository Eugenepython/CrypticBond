import data from './data';
import { useState, useEffect } from 'react';

function shuffleAndSixArray(array) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, 6);
}

export default function SortData(props) {
  const [bondStuff, setBondStuff] = useState(data.data);
  const [theAnswer, setAnswer] = useState(null);
  const [theClues, setClues] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [allChoices, setAllChoices] = useState([]);
  const [render, setRender] = useState(0);
  const [timeoutCompleted, setTimeoutCompleted] = useState(false);
  const [theStyle, setTheStyle] = useState('btn')

  useEffect(() => {
    const timeout = setTimeout(() => {
      const shuffledBond = shuffleAndSixArray(bondStuff);
      const answer = shuffledBond[0];
      const correctAnswer = { ...answer, correct: true };
      setAnswer(correctAnswer);
      const unShuffledClues = shuffledBond[0].clues;
      const shuffledClues = [...unShuffledClues].sort(() => Math.random() - 0.5);
      setClues(shuffledClues);
      const wrongBond = shuffledBond.slice(1);
      const newWrongBond = wrongBond.map((y) => ({
        ...y,
        correct: false,
      }));
      setWrongAnswers(newWrongBond.map((x) => x));
      setTimeoutCompleted(true); // Indicate that the timeout has completed
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [bondStuff, render]);

  useEffect(() => {
    if (theAnswer && wrongAnswers.length > 0 && timeoutCompleted) {
      const togeTher = [theAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
      setAllChoices(togeTher);
    }
  }, [theAnswer, theClues, wrongAnswers, timeoutCompleted]);

  const yourChoices = allChoices.map((x) => (
    <button className = {
    props.selectedButton === x && props.selectedButton.correct === true
    ? 'correctBtn'
    : props.selectedButton === x && props.selectedButton.correct === false
    ? 'wrongBtn'
    : 'btn'

    }  
    onClick={() => props.clickItInSortData(x, setRender)}
    >
      {x.movie}
      </button>
  ));


  return (
    <div className = 'quoteAndChoices'>
      <div className = 'quoteText'>{theClues[0]}</div>
     <div className = 'choiceHolder'> {yourChoices}</div>
    </div>
  );
}
