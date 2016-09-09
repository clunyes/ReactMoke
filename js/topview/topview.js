/**
 * Created by Administrator on 2016/8/25.
 */
'use strict'
// 必要的基础模块
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ToolbarAndroid,
} from 'react-native';
import TopStyle from './topstyle.js';
let homeIcon = require('./img/bottom_item_qy_mine_selected.png');
let searchIcon = require('./img/bottom_item_shouye_select.png');

class TopView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ToolbarAndroid
                style={TopStyle.topStyle.topBar}
                title="浙江省平台"
                actions={[{title: '切换至摩课', icon: searchIcon, show: 'always'}]}
            >
            </ToolbarAndroid>
        );
    }
}
module.exports = TopView;