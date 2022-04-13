import React, { useState, useMemo, useEffect } from 'react';
import {
  TouchableOpacity,
  Image
} from 'react-native';

import { colors, images } from '../../theme'
import styles from './style';

const SingleCell = (props) => {
  const [isTapped, setTapped] = useState(false)
  const figureType = useMemo(() => props.figureType, [isTapped]) ?? null
  const position = props.position ?? null
  const isWinCoords = props.isWinCoords

  const pressDefault = () => {
    console.warn('Press event is not set for SingleCell Component')
  }

  const onPressEvent = props.onPress ?? pressDefault

  const checkPosition = () => {
    if (typeof position === 'string' && !isWinCoords) {
      onPressEvent(position, figureType)
      setTapped(true)
    }
    else {
      !isWinCoords ? console.warn('Position is not set for SingleCell Component') : ''
    }
  }

  useEffect(() => {
    setTapped(false)
  }, [props.reseted])


  return (
    <TouchableOpacity
      onPress={() => checkPosition(position, figureType)}
      style={[
        styles.main,
        {
          marginLeft: position.split('_')[1] === '0' ? 0 : 15.56,
          marginBottom: position.split('_')[0] == props.rowCount - 1 ? 0 : 15.56,
          backgroundColor: isWinCoords && isWinCoords.some(elem => elem === position) ? colors.blue : colors.transparent
        }]}
    >
      {figureType && isTapped ? <Image style={styles.image} source={figureType === 'circle' ? images.circleImg : images.closeImg} /> : <></>}
    </TouchableOpacity>
  );
};

export default SingleCell;
