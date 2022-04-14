import React, { useEffect, useState } from 'react';
import MainScreenUi from './main';

const MainScreenModel = (props) => {
  const cellCount = 9
  const [gameState, setGameState] = useState({})
  const [currentType, setCurrentType] = useState('close')
  const [isWinCoords, setWinCoords] = useState(null)
  const label = 'try'
  const degrees = [90, 180, 270]
  const stateGenerator = (cellCount) => {
    let tempState = {};
    let rowCount = Math.sqrt(cellCount);
    for (let item = 0; item < rowCount; item++) {
      for (let itemInside = 0; itemInside < rowCount; itemInside++) {
        tempState[`${item}_${itemInside}`] = 0
      }
    }
    setGameState(tempState)
  }
  const setPosition = (position) => {
    setGameState(state => ({ ...state, [position]: currentType === 'circle' ? 1 : 2 }))
    setCurrentType(state => (state === 'close' ? 'circle' : 'close'))
  }
  const checkElementsSame = (array, paramFirst, paramSecond) => {
    return array.every(elem => { return (elem === paramFirst && elem !== paramSecond) })
  }
  const checkWin = (state, cellCount) => {
    try {
      let rowCount = Math.sqrt(cellCount)
      let isWin = false;
      let tempResult = [[], []];
      for (let i = 0; i < rowCount; i++) {
        tempResult[0].push(`${i}_${i}`)
        tempResult[1].push(state[`${i}_${i}`])
      }
      isWin = checkElementsSame(tempResult[1], tempResult[1][0], 0)
      if (!isWin) {
        tempResult = [[], []]
        let y = 0
        for (let i = rowCount - 1; i >= 0; i--) {
          tempResult[0].push(`${y}_${i}`)
          tempResult[1].push(state[`${y}_${i}`])
          y = y + 1
        }
        isWin = checkElementsSame(tempResult[1], tempResult[1][0], 0)
      }
      else {
        setWinCoords(tempResult[0])
      }
      if (!isWin) {
        tempResult = [[], []];
        for (let item = 0; item < rowCount; item++) {
          tempResult = [[], []];
          for (let itemInside = 0; itemInside < rowCount; itemInside++) {
            tempResult[0].push(`${item}_${itemInside}`)
            tempResult[1].push(state[`${item}_${itemInside}`])
          }
          isWin = checkElementsSame(tempResult[1], tempResult[1][0], 0)
          if (!isWin) {
            tempResult = [[], []];
            for (let itemInside = 0; itemInside < rowCount; itemInside++) {
              tempResult[0].push(`${itemInside}_${item}`)
              tempResult[1].push(state[`${itemInside}_${item}`])
            }
            isWin = checkElementsSame(tempResult[1], tempResult[1][0], 0)
            if (isWin) {
              setWinCoords(tempResult[0])
            }
          }
          else {
            setWinCoords(tempResult[0])
          }
        }
      }
      else {
        setWinCoords(tempResult[0])
      }
    }
    catch (err) {
      console.warn('Error in game state object')
    }
  }

  const reset = () => {
    setWinCoords(null)
    setCurrentType('close')
    stateGenerator(cellCount)
  }

  useEffect(() => {
    if (Object.keys(gameState).length > 0) {
      checkWin(gameState, cellCount)
    }
    else {
      stateGenerator(cellCount)
    }
  }, [currentType])

  return (
    <MainScreenUi
      label={label}
      degrees={degrees}
      cellCount={cellCount}
      gameState={gameState}
      setPosition={setPosition}
      currentType={currentType}
      setCurrentType={setCurrentType}
      isWinCoords={isWinCoords}
      resetFunc={reset}
    />
  );
};

export default MainScreenModel;
