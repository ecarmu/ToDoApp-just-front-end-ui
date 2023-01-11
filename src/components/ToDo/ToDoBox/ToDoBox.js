import React from "react";
import { View, Text } from "react-native";
import styles from "./ToDoBoxStyle"

function ToDoBox({ToDoName}){

    return(
        
        <View style = {styles.container}>
            <Text style = {styles.text}>{ToDoName.name}</Text>
        </View>
    )
}

export default ToDoBox