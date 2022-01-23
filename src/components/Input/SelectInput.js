import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import DropDownSvg from '../../global/icons/outline/DropDown.svg';

import { BORDER, COLOR, TEXT, SPACING } from '../../global/styles/index.style';

import TouchableList from '../TouchableList';

const Item = ({ item, index }) => {
  return (
    <View style={styles.selectItem}>
      <Text style={styles.textSelect}>{item}</Text>
    </View>
  );
};

/**
 * SelectText Element
 * @param {String} value
 * @param {String} placeholder
 * @param {Style} style - Additional style
 * @param {Event} onChange - handle(item, index)
 * @returns
 */
class SelectInput extends React.Component {
  state = {
    isShownSelector: false,
  };

  handlePressed = () => {
    this.setState({ isShownSelector: !this.state.isShownSelector });
  };

  handleChanged = (item, index) => {
    this.props.onChange(item, index);
    this.setState({ isShownSelector: false });
  };

  render() {
    const { value, data, placeholder, style } = this.props;
    const isChosen = value != null;

    return (
      <View>
        <TouchableHighlight style={[styles.area, style]} underlayColor={COLOR.LIGHT_GRAY} onPress={this.handlePressed}>
          <View style={styles.container}>
            <Text style={isChosen ? styles.text : styles.textPlaceholder}>{isChosen ? value : placeholder}</Text>
            <DropDownSvg style={styles.icon} />
          </View>
        </TouchableHighlight>

        <View style={styles.selectArea}>
          {this.state.isShownSelector && (
            <TouchableList
              data={data}
              activeColor={COLOR.LIGHT_GRAY}
              pressed={this.handleChanged}
              Item={Item}
              contentContainerStyle={styles.selectContainer}
            />
          )}
        </View>
      </View>
    );
  }
}

export default SelectInput;

const styles = StyleSheet.create({
  area: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: BORDER.SMALL,
    zIndex: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.S3,
  },
  text: {
    ...TEXT.REGULAR,
    flexGrow: 1,
    paddingStart: SPACING.S3,
    color: COLOR.BLUE,
  },
  textPlaceholder: {
    ...TEXT.REGULAR,
    flexGrow: 1,
    paddingStart: SPACING.S3,
    color: COLOR.GRAY,
  },
  icon: {
    width: 16,
    height: 16,
    marginStart: SPACING.S2,
    marginEnd: SPACING.S3,
    color: COLOR.BLUE,
  },

  selectArea: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    marginTop: SPACING.S1,
    zIndex: 10,
  },
  selectContainer: {
    backgroundColor: COLOR.LIGHT,
    borderRadius: BORDER.SMALL,
    overflow: 'hidden',
  },

  selectItem: {
    paddingVertical: SPACING.S3,
    paddingHorizontal: SPACING.S4,
  },
  textSelect: {
    ...TEXT.REGULAR,
    color: COLOR.GRAY,
  },
});
