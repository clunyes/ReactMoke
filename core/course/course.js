/**
 * Created by Administrator on 2016/8/25.
 */
'use strict'
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import ContentStyle from './coursestyle.js';
const httpUrl = 'http://api.moocollege.com/mycloudedu/course/union/share_courses?current=1&page_size=10&union_id=19';
const imgUrlPre = 'http://api.moocollege.com/mycloudedu/course/picture/get?width=340&course_id='

var CourseDetail = require('./courseDetail/courseDetail.js');
var TopBar = require('../topview/topview.js');

class CourseList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            courses: null,
        }
    }

    render() {
        if (!this.state.courses) {
            return this.renderLoadingView();
        } else {
            return this.renderListview();
        }
    }

    renderListview() {
        return (
            <View>
                <TopBar/>
                <View style={ContentStyle.contentStyle.conentStyle}>
                    <ListView
                        style={ContentStyle.contentStyle.listStyle}
                        dataSource={this.state.courses}
                        contentContainerStyle={ContentStyle.contentStyle.gridStyle}
                        renderRow={this.renderRow.bind(this)}>
                    </ListView>
                </View>
            </View>
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity style={ContentStyle.contentStyle.itemOpacity}
                              onPress={this.pushToDetail.bind(this)}>
                <Text >{rowData.title}
                </Text>
                <Image source={{uri: imgUrlPre + rowData.id}}
                       style={ContentStyle.contentStyle.imgBack}></Image>
            </TouchableOpacity>
        );
    }

    renderLoadingView() {
        return (
            <View>
                <TopBar/>
                <View style={ContentStyle.contentStyle.loadingView}>
                    <ActivityIndicator
                        size="large"/>
                    <Text >加载中
                    </Text>
                </View>
            </View>
        );
    }

    pushToDetail() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push(
                {
                    component: CourseDetail,
                    title: '详情页'
                }
            );
        }
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(httpUrl).then((response) => response.json()).then(
            responseData => {
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    courses: ds.cloneWithRows(responseData.data.datalist),
                });
            }
        ).done();
    }
}

module.exports = CourseList;