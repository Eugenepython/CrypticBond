
import bondbackground from '/bondbackground.png';
import './index.css';

  
export default function TitlePage(props){
    


return (
<div className = 'titleBackGround' style = {{ display: props.showTitle ? 'block' : 'none'}}>
    <h1 className = 'titleText'>CRYPTIC BOND</h1>
    <div className = 'description'><span className="spanBackground">Figure out which James Bond movie the following clues, quotes and descriptions relate to. There are 10 rounds.  Think long and hard about what each clue may relate to and what Bond movie you think of.  
    Best of luck, Bond fans!</span></div>

<div className = 'start'><button className = 'startButton' onClick={() => props.comMence()}>Start the Game</button></div>

</div>
)
}




