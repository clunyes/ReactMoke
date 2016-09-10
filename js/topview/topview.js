/**
 * Created by Administrator on 2016/8/25.
 */
'use strict'
// 必要的基础模块
import React, {Component} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
class TopView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={style.topBar}>
                <Text style={style.topText}>浙江省平台</Text>
                <View style={style.imgMenu}>
                    <TouchableOpacity onPress={()=>this.onPress('change-platform')}>
                        <Image style={style.imgItem} source={require('./img/menu_change_platform.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onPress('search')}>
                        <Image style={style.imgItem} source={require('./img/menu_search.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onPress(keyword) {
        alert(keyword);
    }
}

const style = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#00aa91',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'space-between'
    },
    topText: {
        color: '#ffffff',
        fontSize: 20,
        marginLeft: 5
    },
    imgMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    imgItem: {
        width: 20,
        marginLeft: 10,
        marginRight: 10,
        height: 20,
    }
});
module.exports = TopView;
