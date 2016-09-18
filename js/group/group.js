/**
 * Created by Administrator on 2016/8/31.
 */
'use strict'
import React, {Component} from "react";
import {StyleSheet, View, RefreshControl, ListView, TouchableOpacity, Image, Text} from "react-native";
const groupUrl = 'http://api.moocollege.com/mycloudedu/group/allgroupByCondition?condition=&pageSize=10';
const imgUrlPre = 'http://api.moocollege.com/mycloudedu/group/logo/get?width=140&group_id=';

var TopBar = require('../topview/topview.js');
var LoadingView = require('../loading/loadview.js');
var CourseDetail = require('../course/courseDetail/courseDetail.js');

let page;
let onload;

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: null,
            isRefreshing: false,
        }
        page = 1;
        onload = false;
    }

    render() {
        if (!this.state.groups) {
            return this.renderLoadingView();
        } else {
            return this.renderListview();
        }
    }

    renderListview() {
        return (<View style={styles.container}>
            <TopBar topText="小组" style="group"/>
            <ListView
                refreshControl=
                    {<RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={()=>this.groupRefresh()}
                        colors={['#00ddff', '#ffbb33', '#ff4444', '#aa66cc']}
                        progressBackgroundColor='#ffffff'/>}
                showsVerticalScrollIndicator={false}
                style={styles.listStyle}
                dataSource={this.state.groups}
                renderRow={this.renderRow.bind(this)}
                onEndReached={this.onEnd()}
                onEndReachedThreshold={20}>
            </ListView>
        </View>);
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.itemOpacity}
                              onPress={()=>this.pushToDetail()}>
                <Image source={{uri: imgUrlPre + rowData.id}}
                       style={styles.imgBack}></Image>
                <View style={styles.textViews}>
                    <Text style={styles.titleText}>{rowData.name}</Text>
                    <Text style={styles.memberText}>{'粉丝 ' + rowData.fansNum + ' 成员 ' + rowData.membersNum}</Text>
                    <Text style={styles.introText}>{rowData.introduction}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <TopBar/>
                <LoadingView word="加载小组中..."/>
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
        this.localGroups = [];
        this.fetchGroup();
    }

    groupRefresh() {
        page = 1;
        this.setState({isRefreshing: true});
        this.fetchGroup();
    }

    onEnd() {
        if (!onload) {
            onload = true;
            page += 1;
            this.fetchGroup();
        }
    }

    fetchGroup() {
        fetch(groupUrl + '&page=' + page).then((response) => response.json()).then(
            responseData => {
                if (responseData && responseData.data && responseData.data.datalist) {
                    let myGroups = responseData.data.datalist;
                    if (page != 1) {
                        this.localGroups = this.localGroups.concat(myGroups);
                    } else {
                        this.localGroups = myGroups;
                    }
                    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                    this.setState({
                        groups: ds.cloneWithRows(this.localGroups),
                        isRefreshing: false,
                    });
                    onload = false;
                }
            }
        ).done();
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        itemOpacity: {
            flexDirection: 'row',
            margin: 7,
            width: window.width,
        },
        textViews: {
            marginLeft: 5,
        },
        imgBack: {
            width: 70,
            height: 70,
            marginRight: 14,
        },
        titleText: {
            color: "#8bc6c7",
            fontSize: 16,
        },
        memberText: {
            color: "#9a9a9a",
            fontSize: 12,
        },
        introText: {
            color: "#ababab",
            fontSize: 13,
        }
    }
)

module.exports = Group;