import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import WREFPhone from '../../global/images/WREFPhone.png';
import Review from '../../global/images/Review.png';

import { BORDER, SPACING, TEXT, COLOR } from '../../global/styles/index.style';

const AnotherProductSection = () => {
  const options = [
    {
      id: 'WREF-Retailer',
      title: 'Dành cho nhà bán lẻ',
      subtitle: 'Ứng dụng kinh doanh các sản phẩm hỗ trợ nông nghiệp',
      image: WREFPhone,
      imageWidth: 64,
      imageHeight: 105,
      backgroundColor: COLOR.LIGHT_CLOUD,
      circleColor: COLOR.LIGHTER_BLUE,
    },
    {
      id: 'WREF-Buyer',
      title: 'Dành cho nhà thu mua',
      subtitle: 'Ứng dụng kết nối các nhà thu mua sản phẩm nông nghiệp',
      image: null,
      imageWidth: 64,
      imageHeight: 105,
      backgroundColor: COLOR.LIGHT_CLOUD,
      circleColor: COLOR.LIGHTER_BLUE,
    },
    {
      id: 'Feedback',
      title: 'Phản hồi',
      subtitle: 'Hãy góp ý cho chúng tôi để cải thiện sản phẩm tốt hơn.',
      image: Review,
      imageWidth: 80,
      imageHeight: 80,
      backgroundColor: COLOR.LIGHTER_DANGER,
      circleColor: COLOR.DANGER,
    },
  ];

  return (
    <View style={styles.area}>
      <Text style={styles.title}>Các sản phẩm khác</Text>
      <View style={styles.optionList}>
        {options.map(option => (
          <View style={[styles.optionArea, { backgroundColor: option.backgroundColor }]} key={option.id}>
            <View style={styles.optionTextArea}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
            </View>
            <View>
              <View style={[styles.optionCircle, { backgroundColor: option.circleColor }]} />
              <Image
                source={option.image}
                width={option.imageWidth}
                height={option.imageHeight}
                style={styles.optionImage}
                resizeMethod="scale"
                resizeMode="contain"
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AnotherProductSection;

const styles = StyleSheet.create({
  area: {
    marginHorizontal: SPACING.S4,
    marginBottom: SPACING.S3,
  },
  title: {
    ...TEXT.H2,
    color: COLOR.DARK,
    marginBottom: SPACING.S3,
  },
  optionList: {
    alignItems: 'stretch',
  },
  optionArea: {
    borderRadius: BORDER.MEDIUM,
    marginBottom: SPACING.S3,
    overflow: 'hidden',
    backgroundColor: COLOR.LIGHT_CLOUD,
    flexDirection: 'row',
  },
  optionTextArea: {
    justifyContent: 'flex-end',
    marginBottom: SPACING.S4,
    marginStart: SPACING.S4,
    flexShrink: 1,
  },
  optionImage: {
    width: 130,
    height: 105,
    marginVertical: SPACING.S2,
  },
  optionTitle: {
    ...TEXT.H3,
    color: COLOR.DARK,
    marginBottom: SPACING.S2,
  },
  optionSubtitle: {
    ...TEXT.SUBTITLE,
    color: COLOR.DARK,
  },
  optionCircle: {
    width: 176,
    height: 176,
    position: 'absolute',
    backgroundColor: COLOR.CLOUD,
    top: 68,
    left: 0,
    borderRadius: BORDER.PILL,
  },
});
