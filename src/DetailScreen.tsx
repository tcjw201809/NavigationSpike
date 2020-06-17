import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = () => {
    return (
        <View style={styles.text}>
            <Text>Detail Screen</Text>
        </View>
    );
}
export default DetailScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
