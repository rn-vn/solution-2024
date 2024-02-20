import React from 'react'
import HomeFooter from './HomeFooter'
import "./Howtoplay.css"

const Howtoplay = () => {
  return (
    <>
      <div className='howtoplay-wrap'>
        <h1 className='howtoplay-title'>About SDGs bingo</h1>
        <p className='howtoplay-p'>
          SDGs Bingo is a fun game to learn about actions to achieve the SDGs goals in a bingo format!
          Launch the app and display the bingo card on the home screen.
          Tap the numbers displayed on the screen to complete the given mission!
          The missions are to take actions related to the SDGs goals and to acquire knowledge about the SDGs.
          When you get three "Clear" cards vertically, horizontally, or diagonally, you have a Bingo!
        </p>
        <h1 className='howtoplay-title'>How to play</h1>
        <p className='howtoplay-p'>
          1.Launch the application.<br />
          2.Display the bingo card on the home screen.<br />
          3.Tap the number displayed on the screen.<br />
          4.Clear the mission.<br />
          5.Clear a number on the bingo card.<br />
          6.Click the reset button if you want to start from the beginning again.<br />
        </p>
        <h1 className='howtoplay-title'>Mission</h1>
        <p className='howtoplay-p'>To take actions related to the SDGs goals and to acquire knowledge about the SDGs.</p>
        <p className='howtoplay-p'>
          For example <br />
          "Throw away plastic bottles"<br />
          "Use eco bags"<br />
          "Read articles about the SDGs"<br />
          "Find out about the SDGs goals"<br />
          and other missions are available.<br />
        </p>
        <h1 className='howtoplay-title'>Bingo cards</h1>
        <p className='howtoplay-p'>
          Bingo cards are assigned a number from 1 to 9 for each SDG goal.
          When you complete a mission, the assigned number will be cleared.
          <p className='textred'>When three Clear cards are aligned vertically, horizontally, or diagonally, you have a Bingo!
          </p>
        </p>
        <h1 className='howtoplay-title'>Learn about the SDGs</h1>
        <p className='howtoplay-p'>
          Read articles related to the SDGs
          You can clear one of your bingo cards if you write a summary of at least a specified number of words.
          The more you learn about the SDGs, the easier it will be to clear your bingo card!
        </p>
        <HomeFooter />
      </div>
    </>
  )
}

export default Howtoplay