import React, { useCallback, useState } from 'react';
import { FlatList, Dimensions, StyleSheet } from 'react-native';

import { SPACING } from '../../../global/styles/index.style';

import ItemProduct from './ItemProduct';
import Animated from 'react-native-reanimated';

const numColumns = 2;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

function ListProduct({ dataList, scrollHandel, HEADER_MAX_HEIGHT }) {
  const formatData = (dataL, numColumns) => {
    const totalRows = Math.floor(dataL.length / numColumns);
    let totalLastRow = dataL.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataL.push({ key: 'blank', empty: true });
      totalLastRow++;
    }
    return dataL;
  };
  const renderItem = useCallback(({ item }) => {
    return <ItemProduct item={item} />;
  }, []);
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      onScroll={scrollHandel}
      contentContainerStyle={[styles.flatListOption]}
      data={formatData(dataList, numColumns)}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollToOverflowEnabled={true}
    />
  );
}

export default ListProduct;

const styles = StyleSheet.create({
  flatListOption: {
    padding: SPACING.S3,
  },
});
