import React from 'react';
import {
  Text,
  Animated
} from 'react-native';
import styles from './style';

const SingleLetter = (props) => {
  const { style, label } = props

  return (
    <Animated.Text style={[styles.text, style]}>{label}</Animated.Text>
  );
};

export default SingleLetter;
