/**
 * Created by Administrator on 2016/9/12.
 */
'use strict'
import React, {Component} from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
var DrawerDetail = require('../download/drawerDetail.js');

class MineView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
                <TouchableOpacity onPress={()=>this.onPressItem('我的课程')}>
                    <View style={styles.item}>
                        < Image source={require('./img/mine_course.png')} style={styles.img}></Image>
                        <Text>我的课程</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onPressItem('我的消息')}>
                    <View style={styles.item}>
                        < Image source={require('./img/mine_message.png')} style={styles.img}></Image>
                        <Text>我的消息</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onPressItem('我的小组')}>
                    <View style={styles.item}>
                        < Image source={require('./img/mine_group.png')} style={styles.img}></Image>
                        <Text>我的小组</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.onPressItem('我的资料')}>
                    <View style={styles.item}>
                        < Image source={require('./img/mine_course_ware.png')} style={styles.img}></Image>
                        <Text>我的资料</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.viewDevider}>
                </View>
                <TouchableOpacity onPress={()=>this.onPressItem('设置')}>
                {/*<TouchableOpacity onPress={()=>this.onGo()}>*/}
                    <View style={styles.item}>
                        < Image source={require('./img/iv_setting.png')} style={styles.img}></Image>
                        <Text>设置</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    onPressItem(word) {
        alert(word);
    }

    // onGo(){
    //     const {navigator} = this.props;
    //     if (navigator) {
    //         navigator.push({
    //             name: 'DrawerDetail',
    //             component: DrawerDetail,
    //         })
    //     }
    // }
}
const styles = StyleSheet.create(
    {
        container: {},
        item: {
            width: window.width,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderBottomWidth: 0.5,
            borderBottomColor: '#e8e8e8',
        },
        img: {
            margin: 10,
            width: 14,
            height: 14,
        },
        viewDevider: {
            backgroundColor: '#f7f7f7',
            height: 5,
            width: window.width,
            borderBottomWidth: 0.5,
            borderBottomColor: '#cccccc',
            borderTopWidth: 0.5,
            borderTopColor: '#cccccc',
        },
    }
)
module.exports = MineView;