/**
 * Created by Administrator on 2016/8/31.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';
var TopBar = require('../topview/topview.js');

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: null,
        }
    }

    render() {
        return (<View style={styles.container}>
            <TopBar topText="小组" style="group"/>
            <ListView
                style={styles.listStyle}
                dataSource={this.state.groups}
                contentContainerStyle={}
                renderRow={this.renderRow.bind(this)}>
            </ListView>
        </View>);
    }

    renderRow() {
        
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