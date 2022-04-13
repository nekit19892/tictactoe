import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './style';

import SingleCell from '../../ui/components/singleCell';
import SingleLetter from '../../ui/components/singleLetter';

const MainScreenUi = (props) => {
  const {
    label,
    degrees,
    cellCount,
    setPosition,
    currentType,
    isWinCoords,
    resetFunc,
  } = props

  const [reseted, setReseted] = useState(false)
  const rowCount = Math.sqrt(cellCount)


  return (
    <TouchableOpacity style={styles.main} onPress={() => { resetFunc(); setReseted(state => !state) }}>
      <View style={styles.textWrapper}>
        {degrees.map((item, index) => (
          <SingleLetter key={item} style={{ transform: [{ rotate: `${item}deg` }] }} label={label[index] ?? ''} />
        ))}
      </View>
      <View style={styles.battleWrapper}>
        {[...Array(rowCount).keys()].map(item => (
          <View key={item} style={styles.singleRow}>
            {[...Array(rowCount).keys()].map(itemInside => (
              <SingleCell
                isWinCoords={isWinCoords}
                key={`${item}_${itemInside}`}
                figureType={currentType}
                position={`${item}_${itemInside}`}
                onPress={setPosition}
                reseted={reseted}
                rowCount={rowCount}
              />
            ))}
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default MainScreenUi;
