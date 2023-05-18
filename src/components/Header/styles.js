import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 20,
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
    },
    images: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    infoUser: {
      flex: 1,
      marginLeft: 5,
    },
    welcome: {
      fontSize: 14,
      color: "#888",
    },
    name: {
      fontSize: 18,
      fontWeight: "800",
    },
    buttonIcon: {
      padding: 7,
      borderRadius: 50,
      backgroundColor: "#eee",
    },
  });