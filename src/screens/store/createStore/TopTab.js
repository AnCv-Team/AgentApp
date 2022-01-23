import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import NewProduct from './Tab/NewProduct';
import SellALot from './Tab/SellALot';
import FavoriteProduct from './Tab/FavoriteProduct';
import LabelTabTop from '../../../component/LabelTabTop';

import ShoppingBag from '../../../global/icons/outline/shopping_bag.svg';
import LocalAtm from '../../../global/icons/outline/local_atm.svg';
import StarRate from '../../../global/icons/outline/star_rate.svg';

const Tab = createMaterialTopTabNavigator();

function TopTab({ scrollHandel, HEADER_MAX_HEIGHT }) {
  return (
    <Tab.Navigator initialRouteName="NewProductr">
      <Tab.Screen
        name="NewProduct"
        options={{
          tabBarLabel: ({ focused }) => <LabelTabTop title="SP MỚI" Icon={ShoppingBag} focused={focused} />,
        }}>
        {props => <NewProduct {...props} scrollHandel={scrollHandel} HEADER_MAX_HEIGHT={HEADER_MAX_HEIGHT} />}
      </Tab.Screen>
      <Tab.Screen
        name="SellALot"
        options={{ tabBarLabel: ({ focused }) => <LabelTabTop title="BÁN CHẠY" Icon={LocalAtm} focused={focused} /> }}>
        {props => <SellALot {...props} scrollHandel={scrollHandel} HEADER_MAX_HEIGHT={HEADER_MAX_HEIGHT} />}
      </Tab.Screen>
      <Tab.Screen
        name="FavoriteProduct"
        component={FavoriteProduct}
        options={{ tabBarLabel: ({ focused }) => <LabelTabTop title="YÊU THÍCH" Icon={StarRate} focused={focused} /> }}
      />
    </Tab.Navigator>
  );
}

export default TopTab;
