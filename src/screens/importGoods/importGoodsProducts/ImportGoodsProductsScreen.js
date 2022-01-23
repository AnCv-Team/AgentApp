import React, { useRef, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import COLOR from '../../../global/styles/color.style';
import HeaderImportGoodsProducts from './HeaderImportGoodsProducts';
import TopBarNavigator from '../../../components/TopBarNavigator';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import NewProduct from './Tab/NewProduct';
import SellALot from './Tab/SellALot';
import FavoriteProduct from './Tab/FavoriteProduct';

import ShoppingBag from '../../../global/icons/outline/shopping_bag.svg';
import LocalAtm from '../../../global/icons/outline/local_atm.svg';
import StarRate from '../../../global/icons/outline/star_rate.svg';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 80;
const HEIGHT = Dimensions.get('window').height;
const topBarList = [
  {
    name: 'NewProduct',
    label: 'SP MỚI',
    icon: ShoppingBag,
    tabScreen: NewProduct,
  },
  {
    name: 'SellALot',
    label: 'BÁN CHẠY',
    icon: LocalAtm,
    tabScreen: SellALot,
  },
  {
    name: 'FavoriteProduct',
    label: 'YÊU THÍCH',
    icon: StarRate,
    tabScreen: FavoriteProduct,
  },
];

function ImportGoodsProductsScreen({ navigation }) {
  const offset = useSharedValue('0');
  const translateY = useSharedValue(0);
  const heightHeader = useSharedValue(200);
  const translateYTabBar = useSharedValue(0);

  const scrollHandel = useAnimatedScrollHandler(event => {
    const currentOffset = event.contentOffset.y;
    offset.value = currentOffset > translateY.value ? 'down' : 'up';
    translateY.value = currentOffset;
  });

  const heightAnimationHeader = useAnimatedStyle(() => {
    const height = interpolate(
      translateY.value,
      [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      [0, HEADER_MIN_HEIGHT],
      Extrapolate.CLAMP,
    );
    // console.log(heightHeader.value);
    // console.log(translateY.value);
    // console.log(offset.value);
    heightHeader.value = height;
    return { height: height };
  });

  const tabBarAnimatedStyle = useAnimatedStyle(() => {
    const t = interpolate(
      translateY.value,
      [0, HEADER_MAX_HEIGHT],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      Extrapolate.CLAMP,
    );

    translateYTabBar.value = t;
    return {
      transform: [{ translateY: t }],
    };
  });

  return (
    <SafeAreaView style={styles.area}>
      <Animated.View style={[styles.tabBarContainer, tabBarAnimatedStyle]}>
        <TopBarNavigator topBarList={topBarList} scrollHandel={scrollHandel} HEADER_MAX_HEIGHT={HEADER_MAX_HEIGHT} />
      </Animated.View>
      <Animated.View style={[styles.header, heightAnimationHeader]}>
        <HeaderImportGoodsProducts navigation={navigation} translateY={translateY} />
      </Animated.View>
    </SafeAreaView>
  );
}

export default ImportGoodsProductsScreen;

const styles = StyleSheet.create({
  area: {
    backgroundColor: COLOR.WHITE,
    flex: 1,
    position: 'relative',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  tabBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEIGHT,
    zIndex: 1,
  },
});
