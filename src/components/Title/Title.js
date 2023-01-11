import React from "react";
import styles from "./TitleStyle"
import {View, Text} from "react-native"

const Title = ( {countOfToDo} ) => {

    return(
       <View>
        <View style = {styles.container}>

            <View style={styles.title_container}>
                    <Text style={{ color: '#F49D1A', fontSize: 35, fontWeight: 'bold'}}>Yapılacaklar...</Text>
            </View>

            <View>
                    <Text style={{ color: '#F49D1A', fontSize: 35 }} >{countOfToDo}</Text>
            </View>

        </View>

        
       </View> 
    )
}

export default Title