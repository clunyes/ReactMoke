/**
 * Created by Administrator on 2016/8/31.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
var DownloadView = require('./downloadView.js');
var TopBar = require('../topview/topview.js');

class Download extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TopBar topText="在教课程" style="download"/>
                <DownloadView navi={this.props}/>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
    }
)
module.exports = Download;