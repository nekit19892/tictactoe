import React, { useState, useEffect } from 'react';
import {
  View,
  Animated,
  Image,
  TouchableWithoutFeedback,
  Text
} from 'react-native';
import styles from './style';
import SingleCell from '../../ui/components/singleCell';
import SingleLetter from '../../ui/components/singleLetter';
import { images } from '../../ui/theme';

const MainScreenUi = (props) => {
  const {
    label,
    degrees,
    cellCount,
    setPosition,
    currentType,
    isWinCoords,
    resetFunc,
    totalPresses,
    progressText
  } = props
  const [reseted, setReseted] = useState(false)
  const rowCount = Math.sqrt(cellCount)

  const reset = () => {
    resetFunc()
    animationReset.stop()
    animationHideHint.start()
    animationShakeLetter.start()
    setReseted(state => !state)
  }

  const [tapImgPosition, setImgPosition] = useState(new Animated.Value(0))
  const [showSecondCircle, setShowSecondCircle] = useState(new Animated.Value(0))
  const [showHintBlock, setShowHintBlock] = useState(new Animated.Value(0))
  const [shakeAnimation, setShakeAnimation] = useState(new Animated.Value(0))

  const animationShowHint = Animated.timing(showHintBlock, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true
  })

  const animationHideHint = Animated.timing(showHintBlock, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true
  })

  const animationReset = Animated.loop(
    Animated.sequence([
      Animated.timing(tapImgPosition, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(tapImgPosition, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(showSecondCircle, {
        toValue: 4,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(showSecondCircle, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }),
    ]),
    {

    }
  )

  const animationShakeLetter = Animated.sequence([
    Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
    Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
  ])

  useEffect(() => {
    if (totalPresses === cellCount || isWinCoords) {
      animationShowHint.start()
      animationReset.start()
    }
  }, [totalPresses])

  return (
    <TouchableWithoutFeedback style={styles.main} onPress={reset}>
      <View style={styles.main}>
        <View style={styles.textWrapper}>
          {degrees.map((item, index) => (
            <SingleLetter key={item} style={{ transform: [{ rotate: `${item}deg` }, { translateX: shakeAnimation }] }} label={label[index] ?? ''} />
          ))}
        </View>
        <View>
          <Text style={styles.playerText}>{progressText}</Text>
        </View>
        <View
          style={styles.battleWrapper}
          onStartShouldSetResponder={(event) => true}
          onTouchEnd={(e) => {
            e.stopPropagation();
          }}
        >
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

        <Animated.View style={[styles.hintWrapper, { opacity: showHintBlock }]}>
          <Text style={styles.hintText}>Tap outside Battle Field to restart</Text>
          <View style={styles.animatedWrapper}>
            <Animated.View style={[styles.circle, { borderWidth: showSecondCircle }]}>
              <View style={styles.circleSmall} />
            </Animated.View>
            <Animated.View style={[styles.animatedTap, { transform: [{ translateY: tapImgPosition }] }]}>
              <Image source={images.tapImg} style={styles.animatedImg} />
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainScreenUi;
