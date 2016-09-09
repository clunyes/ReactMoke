/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from "react";
import {AppRegistry, StyleSheet, View} from "react-native";
var Main = require('./js/main/main.js');

class FirstRnProject extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Main />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
});
AppRegistry.registerComponent('FirstRnProject', () => FirstRnProject);
