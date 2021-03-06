/**
 * Created by Administrator on 2016/8/31.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class CourseDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=> {
                        this.back()
                    }}>
                    <Text style={styles.welcome}>
                        课程详情
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    back() {
        this.props.navigator.pop();
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
module.exports = CourseDetail;