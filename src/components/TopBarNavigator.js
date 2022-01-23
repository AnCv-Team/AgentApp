import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LabelTabTop from '../components/LabelTabTop';

const Tab = createMaterialTopTabNavigator();

function TopBarNavigator({ topBarList, scrollHandel, HEADER_MAX_HEIGHT }) {
  return (
    <Tab.Navigator initialRouteName="NewProductr">
      {topBarList.map((item, index) => {
        const Conponent = item.tabScreen;
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            options={{
              tabBarLabel: ({ focused }) => <LabelTabTop title={item.label} Icon={item.icon} focused={focused} />,
            }}>
            {props => <Conponent {...props} scrollHandel={scrollHandel} HEADER_MAX_HEIGHT={HEADER_MAX_HEIGHT} />}
          </Tab.Screen>
        );
      })}
    </Tab.Navigator>
  );
}

export default TopBarNavigator;
