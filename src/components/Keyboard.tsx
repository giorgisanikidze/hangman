import React from 'react'

type KeyBoardProps = {
    splitedWord: string[],
    guessedLetters: string[],
    isLooser: boolean,
    isWinner: boolean,
    setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
    
}

function Keyboard({ splitedWord, guessedLetters, setGuessedLetters, isLooser, isWinner }: 
KeyBoardProps) {
    
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    return (
        <div className='sm:mx-7 mx-5 md:mx-20 lg:mx-60 grid gap-2 self-stretch mt-50px grid-cols-full' >
            {letters.map((key) => (
                <button onClick={(e) => {
                    if (splitedWord.includes(key)) {
                        const target = e.target as HTMLElement;
                        target.className = 'active p-1.5 uppercase border-4 border-solid border-black text-black font-bold cursor-pointer text-3xl';
                    } else {
                        const target = e.target as HTMLElement;
                        target.className = 'inactive p-1.5 uppercase border-4 border-solid border-black text-black font-bold cursor-pointer text-3xl'
                    }
                    if (!guessedLetters.includes(key)) {
                        setGuessedLetters(currentLetters => [...currentLetters, key])
                    }
                }} disabled={isWinner || isLooser} key={key} className='p-1.5 uppercase border-4 border-solid border-black text-black font-bold cursor-pointer text-3xl' >{key}</button>
            ))}
        </div>
    )
}

export default Keyboard