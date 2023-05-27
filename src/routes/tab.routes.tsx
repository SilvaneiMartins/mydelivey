import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Tab/Home';
import { Wallet } from '../screens/Tab/Wallet';
import { Carrinho } from '../screens/Tab/Carrinho';
import { Settings } from '../screens/Tab/Settings';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: true,
        }}
    >
        <Screen name="Home" component={Home} />
        <Screen name="Wallet" component={Wallet} />
        <Screen name="Carrinho" component={Carrinho} />
        <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}
