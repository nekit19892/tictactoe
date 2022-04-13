import React from 'react';
import {
  Text
} from 'react-native';

import styles from './style';

const SingleLetter = (props) => {
  const { style, label } = props

  return (
    <Text style={[styles.text, style]}>{label}</Text>
  );
};

export default SingleLetter;
