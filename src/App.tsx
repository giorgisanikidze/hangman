import { useState } from 'react';
import './App.css';
import words from './WordList.json'
import HangmanDraw from './components/HangmanDraw';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import WinnerOrLooser from './components/WinnerOrLooser';

function App() {
  const wordToGuess = useState(words[Math.floor(Math.random() * words.length)])
  const splitedWord = wordToGuess[0].split('')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorectletters = guessedLetters.filter(
    letter => !splitedWord.includes(letter)
  )
  const isLooser = incorectletters.length === 6
  const isWinner = splitedWord.every((letter: string) => 
    guessedLetters.includes(letter)
  )

  return (
    <>
      <WinnerOrLooser isLooser={isLooser} isWinner={isWinner} wordToGuess={wordToGuess} />
      
      <div className={`${isLooser || isWinner ? 'opacity-30' : 'opacity-100'} flex flex-col items-center justify-center h-full mt-10`} >
        <HangmanDraw incorectletters={incorectletters} /> 
        <Word splitedWord={splitedWord} guessedLetters={guessedLetters} />
        <Keyboard splitedWord={splitedWord} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} isLooser={isLooser} isWinner={isWinner} />
      </div>
    </>
  );
}

export default App;