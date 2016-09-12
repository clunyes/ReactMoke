/**
 * Created by Administrator on 2016/8/31.
 */
'use strict'
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";

class Mine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
        </View>);
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5fcff',
        },
    }
)
module.exports = Mine;