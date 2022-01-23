import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { BORDER, SPACING, TEXT, COLOR } from '../../global/styles/index.style';

function SectionHome(props) {
  const { navigation } = props;
  const { title, options, bg } = props.options;
  return (
    <View style={styles.area}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.optionList}>
        {options.map(option => (
          <View style={styles.optionArea} key={option.id}>
            <TouchableHighlight
              onPress={() => navigation.navigate(option.navigator)}
              style={[styles.option, { backgroundColor: bg ? bg : COLOR.LIGHT_YELLOW }]}
              underlayColor="white">
              <View style={{ alignItems: 'center' }}>
                <option.icon height={46} width={46} style={styles.optionIcon} />
                <Text style={styles.optionText}>{option.title}</Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
}

export default SectionHome;

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
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginEnd: -SPACING.S3,
  },
  optionArea: {
    flexBasis: '33.3333333333%',
  },
  option: {
    borderRadius: BORDER.MEDIUM,
    paddingHorizontal: SPACING.S4,
    paddingTop: SPACING.S4,
    paddingBottom: SPACING.S3,
    marginEnd: SPACING.S3,
    marginBottom: SPACING.S3,
    flexGrow: 1,
  },
  optionText: {
    ...TEXT.STRONG,
    color: COLOR.DARK,
    textAlign: 'center',
  },
  optionIcon: {
    marginBottom: SPACING.S2,
  },
});
