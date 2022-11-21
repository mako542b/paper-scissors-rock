type scoreProps = {
    score: number,
    bonus: boolean
}


function GameScore({score, bonus}: scoreProps) {

    return (
        <div>
            <div className="flex gap-10 outline-2 outline-gray-400 max-w-screen-md mx-auto w-3/4 place-content-between items-center outline-double py-2 md:py-4 px-4 md:px-6 rounded-md">
                <div className="">
                    <img className="relative max-h-14 sm:max-h-full" src={`${bonus ? './images/logo-bonus.svg' : './images/logo.svg'}`} alt="logo" />
                </div>
                <div className="bg-white h-fit px-4 py-2 md:px-6 md:py-3 md:min-w-score rounded-md text-center">
                    <p className="text-sm text-score-text font-bold">SCORE</p>
                    <p className={`text-3xl md:text-5xl font-bold text-dark-text`}>{score}</p>
                </div>
            </div>
        </div>
    )

}

export default GameScore
