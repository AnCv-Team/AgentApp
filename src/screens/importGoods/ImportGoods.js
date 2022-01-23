import React from 'react';
import { View, Dimensions, SafeAreaView, StyleSheet, FlatList, ScrollView } from 'react-native';
import { COLOR } from '../../global/styles/index.style';

import HeaderImportGoods from './HeaderImportGoods';
import ItemImportGoods from './ItemImportGoods';
import options from './options.importGoods';

function ImportGoods(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.area}>
      <View>
        <ScrollView>
          <HeaderImportGoods navigation={navigation} />
          <View style={styles.list}>
            {options.map((item, index) => {
              return <ItemImportGoods key={index} item={item} navigation={navigation} />;
            })}
            {/* <FlatList
              data={options}
              renderItem={({ item }) => <ItemImportGoods key={item.id} item={item} navigation={navigation} />}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            /> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default ImportGoods;

const styles = StyleSheet.create({
  area: {
    backgroundColor: COLOR.WHITE,
    flex: 1,
  },
  list: {
    marginTop: -50,
  },
});
