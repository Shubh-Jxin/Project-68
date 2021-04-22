import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MyHeader from '../components/Header';

export default class Facebook extends React.Component{
    render(){
        return(
            <View style={styles.container}>  
                <MyHeader title="Facebook"/>
                <Text style={styles.info}> Facebook </Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'tomato'
    },

    info:{
        fontSize: 30,
        marginTop: 30,
        fontFamily: "Times New Roman",
        textAlign: "center",
        color: "purple",
        fontWeight: "bold",
    }
})