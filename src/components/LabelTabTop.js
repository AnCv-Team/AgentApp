import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR } from '../global/styles/index.style';

const LabelTabTop = ({ title, Icon, focused }) => {
  const colorLabel = focused ? COLOR.LIGHT_BLUE : COLOR.GRAY;
  return (
    <View style={styles.content}>
      <Icon width={20} height={20} style={styles.iconOption} fill={colorLabel} />
      <Text style={{ color: colorLabel }}>{title}</Text>
    </View>
  );
};

export default LabelTabTop;

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconOption: {
    marginRight: 5,
  },
});
