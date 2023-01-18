interface props {
    choises : choisesInterface
    result: string
    timeoutPointer?: number
    setChoosed: (a:boolean) => void
    setResult: (a:string) => void
}

interface choisesInterface {
    playerItem: string
    houseItem: string
}


const ItemPicked = function({choises, result, setChoosed, setResult, timeoutPointer}:props) {
    
    let playerWon: boolean = result === "YOU WON"
    let houseWon: boolean = result === "YOU LOSE"

    const handleNewGame = ():void => {
        if(timeoutPointer) clearTimeout(timeoutPointer)
        setChoosed(false) 
        setResult('and...')
    }

    

    return(
        <div className="grid grid-areas-smLayout md:grid-areas-lgLayout md:pt-0 md:pb-12 place-content-center md:place-content-between gap-x-16 sm:gap-x-28 md:gap-x-16 md:w-mdBoard lg:w-lBoard pt-10 mx-auto text-white">
            <div className="md:grid grid-in-a flex flex-col-reverse gap-10 place-items-center md:animate-slideLeft">
                <p className="mb-12 font-semibold text-md md:text-xl uppercase">you picked</p>
                <div className={`${playerWon ? 'won' : ''} before:transition-shadow before:duration-1000 before:from-${choises.playerItem}-grad-from relative group gen-item-picked before:to-${choises.playerItem}-grad-to cursor-pointer`}>
                    <img className="z-50 lg:scale-150" src={`./images/icon-${choises.playerItem}.svg`} alt="" />
                </div>
            </div>
                <div className="grid grid-in-b mx-auto place-items-center content-center gap-4 animate-revealHouse">
                    <p className="text-4xl font-bold">{result}</p>
                    <button onClick={handleNewGame} className="px-12 py-2 uppercase font-semibold rounded-md border-2 bg-white hover:text-red-700 text-black">play again</button>
                </div>
            <div className="md:grid grid-in-c flex flex-col-reverse gap-10 place-items-center md:animate-slideRight">
                <p className="mb-12 font-semibold text-md md:text-xl uppercase">house picked</p>
                <div className={`${houseWon ? 'won' : ''} before:transition-shadow before:duration-1000 before:animate-fadeInOpacity after:animate-fadeInOpacity bg-black bg-opacity-10 relative group gen-item-picked before:from-${choises.houseItem}-grad-from before:to-${choises.houseItem}-grad-to cursor-pointer`}>
                    <img className="animate-fadeInOpacity z-50 lg:scale-150" src={`./images/icon-${choises.houseItem}.svg`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ItemPicked