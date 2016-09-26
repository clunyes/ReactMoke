/**
 * Created by Administrator on 2016/9/26.
 */
'use strict'
import React, {Component} from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity, Alert} from "react-native";
var DrawerDetail = require('./drawerDetail.js');

class DownloadView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <TouchableOpacity onPress={()=>this.onPressItem('课程图片')}>
                <View style={styles.item}>
                    <Text>课程图片</Text>
                    <Image style={styles.imgItem} source={require('./img/ta.png')}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPressItem('课程名称')}>
                <View style={styles.item}>
                    <Text>课程名称</Text>
                    <Text>QTP自动化测试实践</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPressItem('开课时间')}>
                <View style={styles.item}>
                    <Text>开课时间</Text>
                    <Text>2016-4-23</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPressItem('持续时间')}>
                <View style={styles.item}>
                    <Text>持续时间</Text>
                    <Text>0周</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPressItem('课程类别')}>
                <View style={styles.item}>
                    <Text>课程类别</Text>
                    <Text>人文</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPressItem('课程状态')}>
                <View style={styles.item}>
                    <Text>课程状态</Text>
                    <Text>已经发布</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.onPressChoice()}>
                <View style={styles.item}>
                    <Text>预览此课</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.viewDevider}>
            </View>
            <TouchableOpacity onPress={()=>this.onPressDetail()}>
                <View style={styles.centerItem}>
                    <Text style={styles.centerText}>详情设置</Text>
                </View>
            </TouchableOpacity>
        </View>)
    }

    onPressItem(word) {
        alert(word);
    }

    onPressChoice() {
        Alert.alert('请选择', '内容',
            [
                {text: '作为已加入学生用户', onPress: this.firstChoice},
                {text: '作为未加入学生用户', onPress: this.secondChoice, style: 'cancel'},
            ], {
                cancelable: true
            });
    }

    onPressDetail() {
        const {navigator} = this.props.navi;
        if (navigator) {
            navigator.push({
                name: 'DrawerDetail',
                component: DrawerDetail,
            })
        }
    }

    firstChoice() {
        alert('go first');
    }

    secondChoice() {
        alert('go second');
    }

}
const styles = StyleSheet.create(
    {
        container: {},
        item: {
            width: window.width,
            padding: 10,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderBottomColor: '#e8e8e8',
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
        centerItem: {
            width: window.width,
            padding: 10,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: '#e8e8e8',
        },
        centerText: {
            color: '#00aa91',
        },
        imgItem: {
            width: 20,
            marginLeft: 10,
            marginRight: 10,
            height: 20,
        }
    }
)
module.exports = DownloadView;