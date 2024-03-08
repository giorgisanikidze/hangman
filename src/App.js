import { useState } from 'react';
import './App.css';
import words from './WordList.json'

function App() {
  const wordToGuess = useState(words[Math.floor(Math.random() * words.length)])
  const word = wordToGuess[0].split('')
  const [guessedLetters, setGuessedLetters] = useState([])
  console.log(word);

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


  const incorectletters = guessedLetters.filter(
    letter => !word.includes(letter)
  )
  const isLooser = incorectletters.length === 6
  const isWinner = word.every(letter => 
    guessedLetters.includes(letter)
  )



  



  const head = (
    <div style={{ width: '50px', height: '50px', border: '10px solid black', borderRadius: '100%', position: 'absolute', top: '50px', right: '-20px'}}></div> 
  )

  const body = (
    <div style={{ width: '10px', height: '100px', backgroundColor: 'black', position: 'absolute', top: '100px', right: '0' }}></div>
  )

  const leftArm = (
    <div style={{ width: '100px', height: '10px', backgroundColor: 'black', position: 'absolute', top: '130px', right: '10px', rotate: '30deg', transformOrigin: 'right bottom'}}></div>
  )

  const rightArm = (
    <div style={{ width: '100px', height: '10px', backgroundColor: 'black', position: 'absolute', top: '130px', right: '-100px', rotate: '-30deg', transformOrigin: 'left bottom'}}></div>
  )

  const leftLeg = (
    <div style={{ width: '100px', height: '10px', backgroundColor: 'black', position: 'absolute', top: '190px', right: '0px', rotate: '-50deg', transformOrigin: 'right bottom'}}></div>
  )

  const rightLeg = (
    <div style={{ width: '100px', height: '10px', backgroundColor: 'black', position: 'absolute', top: '190px', right: '-90px', rotate: '50deg', transformOrigin: 'left bottom'}}></div>
  )

  

  return (
    <>
      <div style={{display: isLooser || isWinner ? 'flex' : 'none', borderRadius: '20px', gap: '30px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  position: 'absolute', width: '500px', height: '500px', backgroundColor: 'green', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '3', padding: '20px' }}>
        <h1 style={{fontSize: '50px'}}>
          {isLooser && 'you Lost'}
          {isWinner && 'you win'}
        </h1>
        <h1 style={{fontSize: '50px'}}>{isLooser && `word was "${wordToGuess[0]}"` }</h1>
        <button style={{padding: '20px 60px',border: 'none', borderRadius: '20px', backgroundColor: 'blue', color: 'white'}} onClick={() => {
          window.location.reload()
        }}>Restart</button>
      </div>
      <div className="flex flex-col items-center justify-center h-full mt-10" style={{opacity: isLooser || isWinner ?  '0.3' : '1'}}>
        <div style={{ position: 'relative' }}>
          {incorectletters.length >=1 ? head : null}
          {incorectletters.length >= 2 ? body: null}
          {incorectletters.length >= 3 ? leftArm : null}
          {incorectletters.length >= 4 ? rightArm : null}
          {incorectletters.length >= 5 ? leftLeg : null}
          {incorectletters.length >= 6 ? rightLeg : null}
          <div style={{ position: 'absolute', right: 0, top: 0, height: '50px', width: '10px', backgroundColor: 'black' }}></div>
          <div style={{width: '200px', height: '10px', backgroundColor: 'black', marginLeft: '120px'}}></div>
          <div style={{width: '10px', height: '300px', backgroundColor: 'black', marginLeft: '120px'}}></div>
          <div style={{height: '10px', width: '250px', backgroundColor: 'black'}}></div>
        </div>

        <div className='sm:text-2xl lg:text-8xl gap-2 sm:gap-4 md:gap-8 lg:gap-16'  style={{ display: 'flex', alignItems: 'center',  fontSize: '6rem',  fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'monospace', marginTop: '30px'}}>
          {word.map((letter) => (
            <span style={{fontSize: '30px', borderBottom: '.15em solid black'}}>
              <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
            </span>
          ))}
        </div>


        <div className='sm:mx-7 mx-5 md:mx-20 lg:mx-60' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem', alignSelf: 'stretch', marginTop: '50px'}}>
          {letters.map((key) => (
            <button onClick={(e) => {
              if (word.includes(key)) {
                e.target.className = 'active'
              } else {
                e.target.className = 'inactive'
              }
              if (!guessedLetters.includes(key)) {
                setGuessedLetters(currentLetters => [...currentLetters, key])
              }
            }} disabled={isWinner || isLooser} key={key} style={{padding: '5px',  textTransform: 'uppercase', border: '3px solid black', color: 'black', fontWeight: 'bold', cursor: 'pointer', fontSize: '30px'}}>{key }</button>
            ))}
        </div>

        
      </div>
    </>
  );
}

export default App;
