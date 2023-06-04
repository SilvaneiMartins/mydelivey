import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
            headerShown: false,
            tabBarShowLabel: true,
            tabBarInactiveTintColor: '#AAA',
            tabBarActiveTintColor: '#000',
            tabBarStyle: {
                paddingBottom: 5,
                borderTopWidth: 0,
                backgroundColor: '#F5F5F5',
            },
            tabBarLabelStyle: {
                fontSize: 11,
                shadowOpacity: 0.2,
            },
        }}
    >
        <Screen
            name="Home"
            component={Home}
            options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <View
                        style={{
                            marginTop: 5,
                        }}
                    >
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            size={20}
                            color={color}
                        />
                    </View>
                )
            }}
        />
        <Screen
            name="Wallet"
            component={Wallet}
            options={{
                title: 'Carteira',
                tabBarIcon: ({ color, focused }) => (
                    <View
                        style={{
                            marginTop: 5,
                        }}
                    >
                        <Ionicons
                            name={focused ? "card-sharp" : "card-outline"}
                            size={20}
                            color={color}
                        />
                    </View>
                )
            }}
        />
        <Screen
            name="Carrinho"
            component={Carrinho}
            options={{
                title: 'Carrinho',
                tabBarIcon: ({ color, focused }) => (
                    <View
                        style={{
                            marginTop: 5,
                        }}
                    >
                        <Ionicons
                            name={focused ? "cart-sharp" : "cart-outline"}
                            size={20}
                            color={color}
                        />
                    </View>
                )
            }}
        />
        <Screen
            name="Settings"
            component={Settings}
            options={{
                title: 'Ajustes',
                tabBarIcon: ({ color, focused }) => (
                    <View
                        style={{
                            marginTop: 5,
                        }}
                    >
                        <Ionicons
                            name={focused ? "settings-sharp" : "settings-outline"}
                            size={20}
                            color={color}
                        />
                    </View>
                )
            }}
        />
    </Navigator>
  )
}
