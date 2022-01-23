import React from 'react';

import { FlatList, StyleSheet, TouchableHighlight, View } from 'react-native';

import { COLOR, SPACING } from '../global/styles/index.style';

const LineSeparator = ({ highlighted }) => <View style={[styles.separator, highlighted && { marginHorizontal: 0 }]} />;

/**
 * Render Item Element for TouchableList
 * @param {Element} Item - Item will has props = {item, index}
 * @param {Event} handlePressed - handlePressed(item, index)
 * @param {Number} props.index - Index of the item of list
 * @returns
 */
const renderItem = (Item, activeColor = COLOR.LIGHT_CLOUD, handlePressed, itemStyle) => {
  return ({ item, index, separators }) => {
    return (
      <TouchableHighlight
        key={item.id || index}
        style={itemStyle}
        onPress={() => handlePressed(item, index)}
        underlayColor={activeColor}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <Item item={item} index={index} />
      </TouchableHighlight>
    );
  };
};

/**
 * TouchableList
 * @param {Object} data - data to render
 * @param {Element} Item - Item to be render. Item will has props = {item, index}
 * @param {Element} Separator - (Optional) Separator between 2 item
 * @param {Event} pressed - handlePressed(item, index)
 * @param {Color} activeColor
 * @param {Style} contentContainerStyle
 * @param {Style} itemStyle - Optional
 * @param {React.Ref} listRef - Ref to Flatlist
 * @returns
 */
const TouchableList = ({
  data,
  Item,
  pressed,
  activeColor,
  Separator = LineSeparator,
  contentContainerStyle,
  itemStyle,
  listRef,
}) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={Separator}
      renderItem={renderItem(Item, activeColor, pressed, itemStyle)}
      contentContainerStyle={contentContainerStyle}
      ref={listRef}
      onScrollToIndexFailed={() => {}}
    />
  );
};

export default TouchableList;

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: SPACING.S4,
    height: 0.5,
    backgroundColor: COLOR.LIGHT_GRAY,
  },
});
