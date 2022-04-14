import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
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
        {[...Array(rowCount)].map((item, index) => (
          <View key={index} style={styles.singleRow}>
            {[...Array(rowCount)].map((itemInside, indexInside) => (
              <SingleCell
                isWinCoords={isWinCoords}
                key={`${index}_${indexInside}`}
                figureType={currentType}
                position={`${index}_${indexInside}`}
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
