type WordProps = {
    splitedWord: string[],
    guessedLetters : string[]
}

function Word({ splitedWord, guessedLetters } : WordProps) {
    return (
        <div className='sm:text-2xl lg:text-8xl gap-2 sm:gap-4 md:gap-8 lg:gap-16 flex items-center text-8xl font-bold uppercase font-mono mt-30px '  >
            {splitedWord.map((letter) => (
                <span className='text-3xl border-b-4 border-solid border-black' >
                    <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
                </span>
            ))}
        </div>
    )
}

export default Word