import { useRef, useState} from 'react'
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

const itemsArr : string[] = ['scissors', 'paper', 'rock', 'spock', 'lizard']


function App() {

  const [score, setScore] = useSessionStorage<number>('score', 0)
  const [rulesOn, setRulesOn] = useState(false)
  const [choosed, setChoosed] = useState(false)
  const [choises, setChoises] = useState({playerItem:'', houseItem:''})
  const [result, setResult] = useState('and...')
  const [bonus, setBonus] = useSessionStorage<boolean>('bonus', false)
  const timeoutPointer = useRef<number>()

  const randomGenerator = function(a:number): string {
    let rnd = Math.floor(Math.random() * a)
    return itemsArr[rnd]
  }


  const calcResult = function(choises:choisesInterface): void {
    const userChoice = choises.playerItem
    const houseChoice = choises.houseItem
    if(houseChoice === userChoice) {
      timeoutPointer.current = setTimeout(() => {
        setResult('TIE')
      },3200)
    } else if(
        houseChoice === 'spock' && ['scissors', 'rock'].includes(userChoice) ||
        houseChoice === 'scissors' && ['paper', 'lizard'].includes(userChoice) ||
        houseChoice === 'paper' && ['rock', 'spock'].includes(userChoice) ||
        houseChoice === 'rock' && ['scissors', 'lizard'].includes(userChoice) ||
        houseChoice === 'lizard' && ['spock', 'paper'].includes(userChoice) 
    ) {
        timeoutPointer.current = setTimeout(() => {
          setResult('YOU LOSE')
          setScore(prev => prev - 1)
        } , 3200)
        
    } else {
      timeoutPointer.current = setTimeout(() => {
        setResult('YOU WON')
        setScore(prev => prev + 1)
        } , 3200)
    }
}

  const play = function(playerItem: string): void {
    let itemsQuant: number = bonus ? 5 : 3 
    let houseItem = randomGenerator(itemsQuant)
    setChoosed(true)
    setChoises({playerItem, houseItem})
    calcResult({playerItem, houseItem})
  }

  return (
    <div className="min-h-screen gap-12 bg-gradient-radial from-gradient-from to-gradient-to py-4 grid">
      <GameScore score={score} bonus={bonus}/>
      {choosed ? (
        <ItemPicked choises={choises} timeoutPointer={timeoutPointer.current} result={result} setChoosed={setChoosed} setResult={setResult}/>
        ) : bonus ? (
           <ChooseItemBonus play={play}/>
        ) : (
          <ChooseItem play={play}/>)}
      {rulesOn && <Rules setRulesOn={setRulesOn} bonus={bonus}/>}
      <div className='grid md:grid-flow-col md:mt-auto place-items-center md:place-content-between gap-2 md:px-14'>
        <button onClick={() => setBonus(prev => !prev)} className={`rules-button`}>{bonus ? 'NORMAL' : 'SPICE IT UP'}</button>
        <button onClick={() => setRulesOn(true)} className={`rules-button`}>RULES</button>
      </div>
    </div>
  )
}

export default App
