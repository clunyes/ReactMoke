/**
 * Created by Administrator on 2016/8/25.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
} from  'react-native';

const style = StyleSheet.create({
    conentStyle: {
        alignItems: 'center',
        height: 500,
        flex: 1,
        justifyContent: 'flex-start',
    },
    gridStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    listStyle: {
        flex: 1,
    },
    itemOpacity: {
        margin: 3,
        width: 170,
        height: 150,
    },
    loadingView: {
        alignItems: 'center',
        flex: 1,
    },
    imgBack: {
        alignItems: 'center',
        flex: 1,
    }
});
module.exports.contentStyle = style;