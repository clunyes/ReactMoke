/**
 * Created by Administrator on 2016/8/31.
 */
'use strict'
import React, {Component} from "react";
import {StyleSheet, View} from "react-native";

var MineTop = require('./mineTop.js');

class Mine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <MineTop/>
        </View>);
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
    }
)
module.exports = Mine;