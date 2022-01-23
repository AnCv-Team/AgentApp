import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ImageColors from 'react-native-image-colors';

import { BORDER, SPACING, TEXT, COLOR } from '../../../global/styles/index.style';

const uri = 'http://apromaco.vn/wp-content/uploads/2014/11/12510-14_resized_apro.jpg';

const ItemProduct = ({ item }) => {
  const [colors, setColors] = useState({ value: '#228B22' }); // này hình như phải r mới đc

  useEffect(() => {
    const fetchColors = async () => {
      const colorImage = await ImageColors.getColors(uri, {
        fallback: '#228B22',
        cache: false,
      });
      setColors({ value: COLOR.setOpacity(colorImage.dominant, 0.2) });
    };
    fetchColors();
    return () => {
      setColors({ value: '#228B22' });
    };
  }, []);
  if (item.empty) {
    return <View style={[styles.area, styles.itemInvisible]} />;
  }
  return (
    <View style={styles.area}>
      <View style={[styles.viewImageOption, { backgroundColor: colors.value }]}>
        <Image
          style={styles.imageOption}
          source={{
            uri: uri,
          }}
        />
      </View>
      <View>
        <View style={styles.contentPrice}>
          <Text style={styles.txtPrice}>80.000 VNĐ </Text>
          <Text style={styles.txtHint}>/ 25kg</Text>
        </View>
        <Text style={styles.txtHint}>Phân Lâm Thao</Text>
      </View>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    margin: SPACING.S2,
  },
  viewImageOption: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: BORDER.MEDIUM,
    overflow: 'hidden',
  },
  imageOption: {
    height: '80%',
    width: '80%',
  },
  contentPrice: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPrice: {
    ...TEXT.STRONG,
    fontWeight: 'bold',
  },
  txtHint: {
    ...TEXT.SMALL,
  },
  itemInvisible: {
    backgroundColor: COLOR.TRANSPARENT,
  },
});
