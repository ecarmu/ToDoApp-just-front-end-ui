import React, {useState} from "react";
import styles from "./ToDoInputBoxStyle"
import {View, TextInput, Button} from "react-native";

const ToDoInputBox = ({ setCountAfterButtonPressed, setToDoArrayAfterButtonPressed }) => {

const [text, setText] = useState('')

function updateText(text){
    setText(text);
}

    return (
        <View style = {styles.container}>
            <View style={styles.input_container}>
                <TextInput
                    placeholder='Yapılacak...'
                    placeholderTextColor={"#B2B2B2"}
                    onChangeText={text => updateText(text)}
                    value = {text}
                    style={{color: "white"}}
                />
            </View>
        
            <View style={styles.save_button_container}>
                <Button 
                title="Kaydet"
                color={text === "" ? "#B2B2B2" : "#F49D1A"}
                disabled={text === ''}  
                
                
                onPress={() =>
                    {
                        setToDoArrayAfterButtonPressed(text)
                        console.log(text)
                        setText('')
                        setCountAfterButtonPressed()
                    }
                }
                    />
            </View>
        </View>
    )
}

export default ToDoInputBox;