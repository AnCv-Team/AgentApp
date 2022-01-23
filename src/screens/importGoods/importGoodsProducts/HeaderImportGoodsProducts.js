import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import HeaderBackButton from '../../../components/Buttons/HeaderBackButton';

import { BORDER, SPACING, TEXT, COLOR } from '../../../global/styles/index.style';

import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const bg = require('../../../global/images/importGoods/BgLeafs.jpg');
const fertilizerImg = require('../../../global/images/importGoods/Fertilizer.png');

function HeaderImportGoodsProducts({ navigation, translateY }) {
  const styleCircleBG = useAnimatedStyle(() => {
    const scale = interpolate(translateY.value, [0, 100, 200, 400], [1, 0.8, 0.5, 0], Extrapolate.CLAMP);
    return {
      transform: [{ scale }],
    };
  });
  return (
    <ImageBackground style={styles.area} source={bg}>
      <HeaderBackButton styleButton={styles.backButton} navigation={navigation} />
      <Animated.View style={[styles.circleBG, styleCircleBG]} />
      <View style={styles.viewTitle}>
        <Image source={fertilizerImg} />
        <Text style={styles.title}>Phân bón</Text>
      </View>
    </ImageBackground>
  );
}

export default HeaderImportGoodsProducts;

const styles = StyleSheet.create({
  area: {
    width: Dimensions.get('window').width,
    height: 200,
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomEndRadius: 120,
    borderBottomStartRadius: 120,
  },
  backButton: {
    position: 'absolute',
    top: SPACING.S4,
    left: SPACING.S4,
  },
  circleBG: {
    position: 'absolute',
    alignItems: 'center',
    top: '50%',
    width: 200,
    height: 200,
    backgroundColor: COLOR.LIGHT_SUCCESS,
    borderRadius: BORDER.PILL,
  },
  viewTitle: {
    position: 'absolute',
    alignItems: 'center',
    top: '30%',
  },
  title: {
    ...TEXT.H1,
    fontWeight: 'bold',
    color: COLOR.BLACK,
  },
});
