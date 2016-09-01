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
var CourseDetail = require('../course/courseDetail/courseDetail.js');

class Download extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=> {
                        this.pushToDetail()
                    }}>
                    <Text style={styles.welcome}>
                        下载
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    pushToDetail() {
        this.props.navigator.push(
            {
                component: CourseDetail,
                title: '详情页'
            }
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5fcff',
        },
        welcome: {
            textAlign: 'center',
            margin: 10,
        }
    }
)
module.exports = Download;