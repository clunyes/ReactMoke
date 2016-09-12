/**
 * Created by Administrator on 2016/9/12.
 */
'use strict'
import React, {Component} from "react";
import {StyleSheet, View, Image} from "react-native";

class MineTop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./img/people_home_back.png')} style={styles.imgBack}>
                    <Image source={require('./img/iv_avatar_default_big.png')} style={styles.imgAvatar}></Image>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'flex-start',
        },
        imgBack: {
            height: 260,
            width: window.width,
            resizeMode: 'cover',
            alignItems: 'center',
            justifyContent: 'center'
        },
        imgAvatar: {
            width: 80,
            height: 80,
        }
    }
)

module.exports = MineTop;