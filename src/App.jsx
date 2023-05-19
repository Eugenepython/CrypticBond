import SortData from './SortData'
import TitlePage from './TitlePage'
import { useState, useEffect } from 'react'





function App() {
  const [count, setCount] = useState(0)
  const [round, setRound] = useState(1)
  const [showTitle, setShowTitle] = useState(true)
  const [selectedButton, setSelectedButton] = useState(null);
  const [backgroundColor, setBackGroundColor] = useState('')
  
 const colors = ['blue', 'yellow', 'orange', 'green', 'pink', 'red', 'purple', 'brown', 'white', 'grey']

 useEffect(() => {
  const min = 1;
  const max = 10;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  setBackGroundColor(colors[randomNumber])
  }, [round]);

 
  //console.log(selectedButton)
  const numberOfQuestions = 10
  if (round > (numberOfQuestions)){
    console.log("the end")
  }
  

function clickItInApp(y, z){
  setRound(a=>a+=1)
  //console.log(y.correct)
  z(x => x+=1)
  setSelectedButton(y)
  if (y.correct === true){
    setCount(x => x+=1)
  } 
}

function reStart(){
  setRound(1)
  setCount(0)
}

function beGin(){
  setShowTitle(false)
} 

//console.log("the score is "  + count)
//console.log("the round is " + round)

//`url(${image})`

  return (
    <>
      <div>
        <TitlePage comMence = {beGin} showTitle = {showTitle} />
        <div className='mystery' style={{ backgroundColor, display: showTitle ? 'none' : 'block' }}>
        {round <= numberOfQuestions ? <div className = 'rounds'> <h2>Round {round}</h2> </div>:null}
    <div>{round <= (numberOfQuestions ) ?<SortData clickItInSortData = {clickItInApp} selectedButton = {selectedButton} /> :null}</div>
    {round <= numberOfQuestions ? <div className = 'currentScore'> <h3>Score : {count}</h3> </div>:null}
    <div className = 'finalPage'>
    {round > (numberOfQuestions ) ?<div className = 'finalScore'>{round > (numberOfQuestions ) ?<h3>You scored  {count}/{numberOfQuestions} !</h3>  :null}</div>: null} 
    <div className = 'lastButton'>{round > (numberOfQuestions ) ?<button className = 'reStart' onClick = {reStart}> Go Back</button>  :null}</div> 
    </div>
     </div>
      </div>
      
    </>
  )
}

export default App

