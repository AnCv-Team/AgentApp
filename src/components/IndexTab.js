import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { BORDER, COLOR, TEXT } from '../global/styles/index.style';

/**
 * @param  {String} label
 * @param  {IconSvg} Icon=null
 * @param  {Color} fillIcon=COLOR.BLUE
 * @param  {String} title
 * @param  {String} subtitle
 * @param  {StyleSheet} borderColor
 */

const IndexTab = ({ label, Icon = null, fillIcon = COLOR.BLUE, title, subtitle, borderColor }) => {
  return (
    <View style={styles.layout}>
      <View style={[styles.indexTab, borderColor]}>
        {label && <Text style={styles.txtIndexTab}>{label}</Text>}
        {Icon && <Icon height={40} width={40} fill={fillIcon} />}
      </View>
      <View style={styles.content}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default IndexTab;

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
  },
  indexTab: {
    width: 60,
    height: 60,
    borderRadius: BORDER.PILL,
    borderWidth: 2,
    borderColor: COLOR.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtIndexTab: {
    ...TEXT.H2,
    fontWeight: 'bold',
  },
  content: {
    marginLeft: 10,
    height: '100%',
    justifyContent: 'center',
  },
  txtTitle: {
    ...TEXT.H3,
    fontWeight: '600',
    color: COLOR.BLACK,
  },
  txtSubtitle: {
    ...TEXT.SMALL,
    color: COLOR.GRAY,
  },
});
