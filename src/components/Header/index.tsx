import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, Pressable, Alert } from "react-native";

import { styles } from "./styles";

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={{
                        uri: "https://github.com/silvaneimartins.png",
                    }}
                    style={styles.images}
                />

                <View style={styles.infoUser}>
                    <Text style={styles.welcome}>Seja bem-vindo</Text>
                    <Text style={styles.name}>Silvanei Martins</Text>
                </View>

                <Pressable
                    style={styles.buttonIcon}
                    onPress={() => Alert.alert("Pesquisar", "Clicou no botão de pesquisa")}
                >
                    <Ionicons name="search" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
};
