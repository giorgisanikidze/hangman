import { useState } from 'react';
import './App.css';
import words from './WordList.json'

function App() {
  const wordToGuess = useState(words[Math.floor(Math.random() * words.length)])
  const splitedWord = wordToGuess[0].split('')
  const [guessedLetters, setGuessedLetters] = useState([])

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


  const incorectletters = guessedLetters.filter(
    letter => !splitedWord.includes(letter)
  )
  const isLooser = incorectletters.length === 6
  const isWinner = splitedWord.every(letter => 
    guessedLetters.includes(letter)
  )


  const head = (
    <div className='border-10 border-solid border-black rounded-full w-50 h-50 absolute top-50px -right-5'></div> 
  )

  const body = (
    <div className='w-2.5 h-100 absolute bg-black top-100px right-0'></div>
  )

  const leftArm = (
    <div className='w-100px h-2.5 bg-black absolute top-130px right-2.5 rotate-30 origin-bottom-right'></div>
  )

  const rightArm = (
    <div className='w-100px h-2.5 bg-black absolute top-130px -right-100px -rotate-30 origin-bottom-left' ></div>
  )

  const leftLeg = (
    <div className='w-100px h-2.5 bg-black absolute top-190px right-0 -rotate-50 origin-bottom-right' ></div>
  )

  const rightLeg = (
    <div className='w-100px h-2.5 bg-black absolute top-190px -right-90px rotate-50 origin-bottom-left' ></div>
  )

  

  return (
    <>
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
      <div className={`${isLooser || isWinner ? 'opacity-30' : 'opacity-100'} flex flex-col items-center justify-center h-full mt-10`} >
        <div className='relative'>
          {incorectletters.length >=1 ? head : null}
          {incorectletters.length >= 2 ? body: null}
          {incorectletters.length >= 3 ? leftArm : null}
          {incorectletters.length >= 4 ? rightArm : null}
          {incorectletters.length >= 5 ? leftLeg : null}
          {incorectletters.length >= 6 ? rightLeg : null}
          <div className='absolute right-0 top-0 h-50px w-2.5 bg-black' ></div>
          <div className='w-200px h-2.5 bg-black ml-120px' ></div>
          <div className='w-2.5 h-300px bg-black ml-120px' ></div>
          <div className='h-2.5 w-250px bg-black'  style={{height: '10px', width: '250px', backgroundColor: 'black'}}></div>
        </div>

        <div className='sm:text-2xl lg:text-8xl gap-2 sm:gap-4 md:gap-8 lg:gap-16 flex items-center text-8xl font-bold uppercase font-mono mt-30px '  >
          {splitedWord.map((letter) => (
            <span className='text-3xl border-b-4 border-solid border-black' >
              <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
            </span>
          ))}
        </div>


        <div className='sm:mx-7 mx-5 md:mx-20 lg:mx-60 grid gap-2 self-stretch mt-50px grid-cols-full' >
          {letters.map((key) => (
            <button onClick={(e) => {
              if (splitedWord.includes(key)) {
                e.target.className = 'active p-1.5 uppercase border-4 border-solid border-black text-black font-bold cursor-pointer text-3xl'
              } else {
                e.target.className = 'inactive p-1.5 uppercase border-4 border-solid border-black text-black font-bold cursor-pointer text-3xl'
              }
              if (!guessedLetters.includes(key)) {
                setGuessedLetters(currentLetters => [...currentLetters, key])
              }
            }} disabled={isWinner || isLooser} key={key} className='p-1.5 uppercase border-4 border-solid border-black text-black font-bold cursor-pointer text-3xl' >{key }</button>
            ))}
        </div>

        
      </div>
    </>
  );
}

export default App;
