/**
 * Created by Administrator on 2016/9/26.
 */
'use strict'
import React, {Component} from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity, DrawerLayoutAndroid} from "react-native";
var TopBar = require('../topview/topview.js');
let _drawer;
class DrawerDetail extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var navigationView = (
            <View style={styles.naviView}>
                <Text style={styles.naviText}>课程信息</Text>
                <Text style={styles.naviSecondText}>基本信息</Text>
                <Text style={styles.naviSecondText}>宣传视频</Text>
                <Text style={styles.naviText}>授课安排</Text>
                <Text style={styles.naviText}>课件资料</Text>
                <Text style={styles.naviText}>题目测试</Text>
                <Text style={styles.naviText}>成绩设定</Text>
                <Text style={styles.naviText}>成员管理</Text>
                <Text style={styles.naviText}>高级设置</Text>
            </View>
        );
        return (
            <View style={styles.container}>
                <DrawerLayoutAndroid
                    ref={(drawer) => {
                        _drawer = drawer;
                    }}
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                    <View style={styles.contentContainer}>
                        <TopBar topText="详情设置" style="detail"/>
                        <TouchableOpacity onPress={()=>this.showDrawer()}>
                            <Text style={styles.showButton}>默认弹出菜单</Text>
                        </TouchableOpacity>
                    </View>
                </DrawerLayoutAndroid>
            </View>
        );
    }

    showDrawer() {
        _drawer.openDrawer();
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        naviView: {
            flex: 1,
            backgroundColor: '#fff'
        },
        naviText: {
            margin: 10,
            fontSize: 18,
            textAlign: 'left',
            color: 'black'
        },
        naviSecondText: {
            margin: 10,
            marginLeft: 20,
            fontSize: 15,
            textAlign: 'left'
        },
        contentContainer: {
            flex: 1
        },
        showButton: {
            flex: 1,
            alignSelf: 'center',
        }
    }
)
module.exports = DrawerDetail;