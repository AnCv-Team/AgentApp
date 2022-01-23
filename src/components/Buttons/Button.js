import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BORDER, COLOR, TEXT, SPACING } from '../../global/styles/index.style';

/**
 * Button Element
 * @param {Event} pressed
 * @param {Text} children - Text display
 * @param {Style} style - Additional Style for Button
 * @returns
 */
const Button = ({ pressed, children, style }) => {
  return (
    <TouchableOpacity onPress={pressed} activeOpacity={0.85} style={[styles.btn, style]}>
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.S3,
    elevation: 0,
    borderRadius: BORDER.NORMAL,
    backgroundColor: COLOR.BLUE,
  },

  text: {
    alignSelf: 'center',
    ...TEXT.H3,
    color: COLOR.WHITE,
  },
});
