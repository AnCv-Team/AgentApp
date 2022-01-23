import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { BORDER, SPACING, TEXT, COLOR } from '../../global/styles/index.style';
import Icons from 'react-native-vector-icons/Ionicons';

function ItemImportGoods({ item, navigation }) {
  const { colorDot, background, title, more, news, iconNews, img, navigate } = item;
  return (
    <View style={[styles.area, { backgroundColor: background }]}>
      <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
        <Image style={styles.optionImg} source={img} />
        <View style={styles.content}>
          <View style={[styles.optionDot, { backgroundColor: colorDot }]} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.optionText}>{more}</Text>
          <View style={styles.optionTextBottom}>
            <Icons name={iconNews} size={15} />
            <Text style={styles.optionText}>{news}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ItemImportGoods;

const styles = StyleSheet.create({
  area: {
    minHeight: 150,
    borderRadius: BORDER.MEDIUM,
    marginHorizontal: SPACING.S5,
    marginVertical: SPACING.S2,
  },
  optionDot: {
    width: SPACING.S5,
    height: SPACING.S5,
    borderRadius: 100,
  },
  content: {
    padding: SPACING.S5,
  },
  title: {
    ...TEXT.H2,
    paddingVertical: SPACING.S1,
    fontWeight: '900',
  },
  optionText: {
    ...TEXT.SMALL_STRONG,
    paddingVertical: SPACING.S1,
    color: COLOR.GRAY,
    maxWidth: '75%',
    marginLeft: 5,
  },
  optionTextBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionImg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderBottomRightRadius: BORDER.MEDIUM,
  },
});
