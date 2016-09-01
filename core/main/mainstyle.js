/**
 * Created by Administrator on 2016/8/25.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Platform,
} from 'react-native';

const style = StyleSheet.create({
    bottomBar: {
        flex: 4,
        flexDirection: 'row',
        height: 120,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    bottomItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    tabIcon: {
        width: Platform.OS === 'ios' ? 30 : 20,
        height: Platform.OS === 'ios' ? 30 : 20,
        resizeMode: 'stretch',
    }
});

module.exports.bottomBarStyle = style;