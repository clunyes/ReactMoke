/**
 * Created by Administrator on 2016/9/18.
 */
import React, {Component} from "react";
import {View, StyleSheet, Text, ActivityIndicator,} from "react-native";
class LoadingView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator size="large"/>
                <Text >{this.props.word}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        alignItems: 'center',
    }
})

module.exports = LoadingView;