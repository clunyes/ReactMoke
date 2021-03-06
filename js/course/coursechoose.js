/**
 * Created by Administrator on 2016/9/12.
 */
'use strict'
import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

class ChooseCourse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.horContainer}>
                    <TouchableOpacity onPress={()=>this.pressButton('最近学习')} style={styles.opaItem}>
                        <View style={styles.item}>
                            <Image style={styles.img} source={require('./img/iv_recent_learn.png')}></Image>
                            <Text style={styles.text}>最近学习</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.line}/>
                    <TouchableOpacity onPress={()=>this.pressButton('课程分类')} style={styles.opaItem}>
                        <View style={styles.item}>
                            <Image style={styles.img} source={require('./img/iv_course_filter.png')}></Image>
                            <Text style={styles.text}>课程分类</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    pressButton(word) {
        alert(word);
    }

}
const styles = StyleSheet.create({
        container: {
            height: 50,
        },
        horContainer: {
            flex: 1,
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderBottomColor: '#e8e8e8',
        },
        opaItem: {
            flex: 1,
            paddingTop: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
        item: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        img: {
            width: 15,
            height: 15,
        },
        text: {
            fontSize: 12,
        },
        line: {
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: '#e8e8e8',
            width: 0.5,
        },
    })
    ;
module.exports = ChooseCourse;