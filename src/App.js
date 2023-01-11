import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, View, FlatList, TouchableOpacity, Text } from "react-native";
import Title from "./components/Title";
import ToDoInputBox from "./components/ToDo/ToDoInputBox";
import ToDoBox from "./components/ToDo/ToDoBox";
import ToDoBoxCrossed from "./components/ToDo/ToDoBoxCrossed";


const App = () =>  {

    const [count, setCountOfToDo] = useState(0)
    const [ToDoArray, setToDoArray] = useState([])

    function increaseCount(currentCount) {
        setCountOfToDo(currentCount + 1);
    }



    function renderToDoBox({item}){
    
    
        return (
            <TouchableOpacity onPress={() => {item.isClicked = !item.isClicked 
            
            
                if (item.isClicked){
                    setCountOfToDo(count-1)
                }
                else setCountOfToDo(count +1)
                
                } }>
                {item.isClicked ? <ToDoBoxCrossed ToDoName={item} />  : <ToDoBox ToDoName={item} />}
                
            </TouchableOpacity>
        )
    }

    function updateArray(theText) {
        setToDoArray([...ToDoArray, { name: theText, id: ToDoArray.length, isClicked: false }])
    }


    return (
        <SafeAreaView style = {styles.safeareaview_container}>
            <View style = {styles.container}>

                <View style = {styles.title_container}>
                    <Title countOfToDo={count}/>
                </View>

                <View style={styles.to_do_container}>
                    <View style = {styles.to_do_box_container}>
                        <FlatList
                            data={ToDoArray}
                            keyExtractor={item => item.id}
                            renderItem= {renderToDoBox}
                        />
                    </View>

                    <View style = {styles.button_container}>
                        <ToDoInputBox setCountAfterButtonPressed={() => increaseCount(count)} setToDoArrayAfterButtonPressed={(textFromInput) => updateArray(textFromInput)}/>
                    </View>
                </View>
            </View>

            
            
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    safeareaview_container: {
        flex: 1,
        backgroundColor: "#2C3135",
        flexDirection: "column"
    },
    container: {
        margin: 20,
        flex: 1,
        flexDirection: "column",
        
    },
    title_container: {
        flex: 1,
        marginBottom: 'auto'
    },
    to_do_container: {
        flex: 8,
        flexDirection: "column",
    },

    button_container: {
       
    }, 
    
    to_do_box_container: {
        flex: 1,
    }
});


export default App