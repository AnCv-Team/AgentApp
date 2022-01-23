import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import ArrowBack from '../../global/icons/outline/ArrowBack.svg';
import { BORDER, COLOR, SPACING } from '../../global/styles/index.style';

const HeaderBackButton = ({ navigation, styleButton }) => {
  return (
    <TouchableOpacity onPress={() => navigation.pop()} style={[styles.area, { ...styleButton }]}>
      <ArrowBack height={24} width={24} style={{ color: COLOR.WHITE }} />
    </TouchableOpacity>
  );
};

export default HeaderBackButton;

const styles = StyleSheet.create({
  area: {
    width: 45,
    height: 45,
    borderColor: COLOR.BLACK,
    borderWidth: 1,
    borderRadius: BORDER.PILL,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: SPACING.S4,
    left: SPACING.S4,
  },
});
