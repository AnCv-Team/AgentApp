import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLOR, SPACING, TEXT } from '../../../global/styles/index.style';

import Revenue from '../../../global/icons/revenue-outline.svg';
import Order from '../../../global/icons/order-outline.svg';
import Warehouse from '../../../global/icons/warehouse-outline.svg';
import QrIcon from '../../../global/icons/qr-outline.svg';

const HeaderIcons = () => {
  const icons = [
    {
      id: 'revenue',
      title: 'Doanh thu',
      icon: Revenue,
    },
    {
      id: 'order',
      title: 'Đơn hàng',
      icon: Order,
    },
    {
      id: 'vnd',
      title: 'Kho hàng',
      icon: Warehouse,
    },
    {
      id: 'qr',
      title: 'QR Thuốc',
      icon: QrIcon,
    },
  ];

  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <item.icon height={40} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={icons}
      renderItem={Item}
      keyExtractor={icon => icon.id}
      horizontal={true}
      contentContainerStyle={styles.area}
    />
  );
};

export default HeaderIcons;

const styles = StyleSheet.create({
  area: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  separator: {
    width: SPACING.S4,
  },
  item: {
    alignItems: 'center',
  },
  image: {
    marginBottom: SPACING.S1,
  },
  text: {
    ...TEXT.STRONG,
    color: COLOR.WHITE,
  },
});
