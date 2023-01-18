import { useState} from 'react'
import GameScore from "./GameScore"
import ChooseItem from "./ChooseItem"
import ChooseItemBonus from "./ChooseItemBonus"
import Rules from './Rules'
import ItemPicked from './ItemPicked'
import useSessionStorage from './useSessionStorage'

interface choisesInterface {
  playerItem: string
  houseItem: string
}



function App() {

  const [score, setScore] = useSessionStorage<number>('score', 0)
  const [rulesOn, setRulesOn] = useState(false)
  const [choosed, setChoosed] = useState(false)
  const [choises, setChoises] = useState({playerItem:'', houseItem:''})
  const [result, setResult] = useState('and...')
  const [bonus, setBonus] = useSessionStorage<boolean>('bonus',false)

  const itemsArr : string[] = ['scissors', 'paper', 'rock', 'spock', 'lizard']

  const randomGenerator = function(a:number): string {
    let rnd = Math.floor(Math.random() * a)
    return itemsArr[rnd]
  }

  const calcResult = function(choises:choisesInterface): void {
    if(choises.houseItem === choises.playerItem) {
      setTimeout(() => {
        setResult('TIE')
      },3200)
    } else if(
        choises.houseItem === 'spock' && choises.playerItem === 'scissors' ||
        choises.houseItem === 'spock' && choises.playerItem === 'rock' ||
        choises.houseItem === 'scissors' && choises.playerItem === 'paper' ||
        choises.houseItem === 'scissors' && choises.playerItem === 'lizard' ||
        choises.houseItem === 'paper' && choises.playerItem === 'rock' ||
        choises.houseItem === 'paper' && choises.playerItem === 'spock' ||
        choises.houseItem === 'rock' && choises.playerItem === 'scissors' ||
        choises.houseItem === 'rock' && choises.playerItem === 'lizard' ||
        choises.houseItem === 'lizard' && choises.playerItem === 'spock' ||
        choises.houseItem === 'lizard' && choises.playerItem === 'paper'
    ) {
      setTimeout(() => {
          setResult('YOU LOSE')
          setScore(prev => prev - 1)
        } , 3200)
        
    }   else {
      setTimeout(() => {
        setResult('YOU WON')
        setScore(prev => prev + 1)
        } , 3200)
    }
}

  const play = function(playerItem: string): void {
    let itemsQuant: number = bonus ? 5 : 3 
    let houseItem = randomGenerator(itemsQuant)
    setChoises({playerItem,houseItem})
    calcResult({playerItem,houseItem})
    setChoosed(true)
  }

  return (
    <div className="min-h-screen gap-12 bg-gradient-radial from-gradient-from to-gradient-to py-4 grid">
      <GameScore score={score} bonus={bonus}/>
      {choosed? <ItemPicked choises={choises}  result={result} setChoosed={setChoosed} setResult={setResult}/> : bonus ? <ChooseItemBonus play={play}/> : <ChooseItem play={play}/>}
      {rulesOn && <Rules setRulesOn={setRulesOn} bonus={bonus}/>}
      <div className='grid md:grid-flow-col md:mt-auto place-items-center md:place-content-between gap-2 md:px-14'>
        <button onClick={() => setBonus(prev => !prev)} className={`rules-button`}>{bonus ? 'NORMAL' : 'SPICE IT UP'}</button>
        <button onClick={() => setRulesOn(true)} className={`rules-button`}>RULES</button>
      </div>
      
    </div>
  )
}

export default App
