/**
 * Created by Administrator on 2016/8/31.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
var TopBar = require('../topview/topview.js');

class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <TopBar/>
        </View>);
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        welcome: {
            textAlign: 'center',
            margin: 10,
        }
    }
)

module.exports = Group;