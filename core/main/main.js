/**
 * Created by Administrator on 2016/8/31.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import BottomBarStyle from './mainstyle.js';
var Mine = require('../mine/mine.js');
var Group = require('../group/group.js');
var Download = require('../download/download.js');
var Course = require('../course/course.js');

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {selectTab: 'course'}
    }

    render() {
        return (
            <TabNavigator>
                {this.renderTabItem('bottom_item_course', 'bottom_item_course_selected', '课程', 'course', '课程', Course)}
                {this.renderTabItem('bottom_item_group', 'bottom_item_group_selected', '小组', 'group', '小组', Group)}
                {this.renderTabItem('bottom_item_download', 'bottom_item_download_selected', '下载', 'download', '下载',
                    Download)}
                {this.renderTabItem('bottom_item_mine', 'bottom_item_mine_selected', '我的', 'mine', '我的', Mine)}
            </TabNavigator>
        );
    }

    renderTabItem(img, selectedImg, name, tag, componentName, component) {
        return <TabNavigator.Item
            title={name}
            renderIcon={() => <Image source={{uri: img}} style={BottomBarStyle.bottomBarStyle.tabIcon}/>}
            renderSelectedIcon={() => <Image source={{uri: selectedImg}}
                                             style={BottomBarStyle.bottomBarStyle.tabIcon}/>}
            onPress={() => {
                this.setState({selectTab: tag})
            }}
            selected={this.state.selectTab === tag}>
            <Navigator
                initialRoute={{name: {componentName}, component: component}}
                configureScene={(route)=> {
                    return Navigator.SceneConfigs.PushFromRight
                }}
                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>
                }
                }
            />
        </TabNavigator.Item>
    }


}

module.exports = Main;