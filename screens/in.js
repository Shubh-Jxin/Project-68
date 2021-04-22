import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MyHeader from '../components/Header';

export default class Instagram extends React.Component{
    render(){
        return(
            <View style={styles.container}>  
                <MyHeader title="Instagram"/>
                <Text style={styles.info}> Instagram </Text>
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