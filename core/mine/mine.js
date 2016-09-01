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

class Mine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <Text style={styles.welcome}>
                我的
            </Text>
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
        welcome: {
            textAlign: 'center',
            margin: 10,
        }
    }
)
module.exports = Mine;