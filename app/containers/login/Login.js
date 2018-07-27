import React, {Component} from 'react'
import {View} from 'react-native'
import MyButton from "../../components/Button/MyButton";

export default class Login extends Component {

    render() {
        return (
            <View>
                <MyButton text={"OK"} onPress={()=>{}}/>
            </View>
        );
    }
}