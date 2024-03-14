function WinnerOrLooser({isLooser, isWinner, wordToGuess}) {
    return (
        <div className={`${isLooser || isWinner ? 'flex' : 'hidden'} rounded-20 gap-30 flex-col justify-center items-center absolute bg-green-600 w-500px h-500px top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 p-5`} >
            <h1 className='size-5xl'>
                {isLooser && 'you Lost'}
                {isWinner && 'you win'}
            </h1>
            <h1 className='size-5xl'>{isLooser && `word was "${wordToGuess[0]}"` }</h1>
            <button className='px-60 py-5 rounded-20 border-none bg-blue-700 text-white' onClick={() => {
                window.location.reload()
            }}>Restart</button>
        </div>
    )
}

export default WinnerOrLooser