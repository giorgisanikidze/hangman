type HangmanDrawProps = {
    incorectletters : string[]
}

function HangmanDraw({ incorectletters }: 
HangmanDrawProps) {
    
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
    )
}

export default HangmanDraw