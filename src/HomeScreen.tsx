import React from "react";
import { View, Text, Button,StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Detal from "./DetailScreen"
const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.text}>
            <Text>Home Screen </Text>
            <Button title="詳細へ"
            onPress={()=>navigation.navigate("Detail")}/>{}
        </View>
    );
}

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
export default HomeScreen;