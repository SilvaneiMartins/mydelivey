import React from 'react';
import { View, Text } from 'react-native';

import { Header } from '../../../components/Header';

export const Home = () => {
    return (
        <>
            <Header />
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'tomato',
                }}
            >
                <Text>Tela Principal</Text>
            </View>
        </>
    )
}
