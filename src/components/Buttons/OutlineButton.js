import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { BORDER, COLOR, TEXT, SPACING } from '../../global/styles/index.style';

/**
 * OutlineButton Element
 * @param {Color} textColor
 * @param {Event} pressed
 * @param {Text} children - Text display
 * @param {Style} style - Additional Style for Button
 * @returns
 */
const OutlineButton = ({ textColor = COLOR.BLUE, pressed, children, style }) => {
  return (
    <TouchableOpacity onPress={pressed} activeOpacity={0.6} style={[styles.btn, { borderColor: textColor }, style]}>
      <View>
        <Text style={[styles.text, { color: textColor }]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  btn: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.S3,
    elevation: 0,
    borderRadius: BORDER.NORMAL,
    backgroundColor: COLOR.WHITE,
    borderWidth: 1,
  },

  text: {
    alignSelf: 'center',
    ...TEXT.H3,
  },
});
