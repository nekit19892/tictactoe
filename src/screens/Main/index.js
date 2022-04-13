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
    [...Array(rowCount).keys()].map(item => {
      [...Array(rowCount).keys()].map(itemInside => {
        tempState[`${item}_${itemInside}`] = 0
      })
    })

    setGameState(tempState)
  }

  const setPosition = (position) => {
    setGameState(state => ({ ...state, [position]: currentType === 'circle' ? 1 : 2 }))
    setCurrentType(state => (state === 'close' ? 'circle' : 'close'))
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
      isWin = tempResult[1].every(elem => { return (elem === tempResult[1][0] && elem !== 0) })

      if (!isWin) {
        tempResult = [[], []]
        let y = 0
        for (let i = rowCount - 1; i >= 0; i--) {
          tempResult[0].push(`${y}_${i}`)
          tempResult[1].push(state[`${y}_${i}`])
          y = y + 1
        }
        isWin = tempResult[1].every(elem => { return (elem === tempResult[1][0] && elem !== 0) })

      }
      else {
        setWinCoords(tempResult[0])

      }

      if (!isWin) {
        tempResult = [[], []];
        [...Array(rowCount).keys()].map(item => {
          tempResult = [[], []];
          [...Array(rowCount).keys()].map(itemInside => {
            tempResult[0].push(`${item}_${itemInside}`)
            tempResult[1].push(state[`${item}_${itemInside}`])
          })
          isWin = tempResult[1].every(elem => { return (elem === tempResult[1][0] && elem !== 0) })

          if (!isWin) {
            tempResult = [[], []];
            [...Array(rowCount).keys()].map(itemInside => {
              tempResult[0].push(`${itemInside}_${item}`)
              tempResult[1].push(state[`${itemInside}_${item}`])
            })
            isWin = tempResult[1].every(elem => { return (elem === tempResult[1][0] && elem !== 0) })
            if (isWin) {
              setWinCoords(tempResult[0])

            }


          }
          else {
            setWinCoords(tempResult[0])

          }
        })
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
    stateGenerator(cellCount)
  }, [])

  useEffect(() => {
    Object.keys(gameState).length > 0 ? checkWin(gameState, cellCount) : ''
  }, [gameState])




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
