import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { BORDER, COLOR, TEXT } from '../global/styles/index.style';

const IndexTab = ({ index }) => {
  return (
    <View style={styles.layout}>
      <View style={styles.indexTab}>
        <Text style={styles.txtIndexTab}>{index}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.txtTitle}>Thông tin cơ bản</Text>
        <Text style={styles.txtHint}>Thông tin mà khách hàng sẽ quan tâm</Text>
      </View>
    </View>
  );
};

export default IndexTab;

const styles = StyleSheet.create({
  layout: {
    width: Dimensions.get('window').width,
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
  txtHint: {
    ...TEXT.SMALL,
    color: COLOR.GRAY,
  },
});
