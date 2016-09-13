/**
 * Created by Administrator on 2016/8/25.
 */
'use strict'
import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    RefreshControl,
} from "react-native";
const courseUrl = 'http://api.moocollege.com/mycloudedu/course/union/share_courses?current=1&page_size=10&union_id=19';
const imgUrlPre = 'http://api.moocollege.com/mycloudedu/course/picture/get?width=340&course_id=';


var CourseDetail = require('./courseDetail/courseDetail.js');
var TopBar = require('../topview/topview.js');
var Banner = require('../course/banner.js');
var ChooseCourse = require('../course/coursechoose.js');

class CourseList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            courses: null,
            isRefreshing: false,
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
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={200}
                    refreshControl=
                        {<RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={()=>this.courseRefresh()}
                            colors={['#00ddff', '#ffbb33', '#ff4444', '#aa66cc']}
                            progressBackgroundColor='#ffffff'/>}>
                    <TopBar/>
                    <Banner/>
                    <ChooseCourse/>
                    <View style={styles.conentStyle}>
                        <ListView
                            style={styles.listStyle}
                            dataSource={this.state.courses}
                            contentContainerStyle={styles.gridStyle}
                            renderRow={this.renderRow.bind(this)}>
                        </ListView>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.itemOpacity}
                              onPress={()=>this.pushToDetail()}>
                <Image source={{uri: imgUrlPre + rowData.id}}
                       style={styles.imgBack}>
                    <View style={styles.floatView}>
                        <Text style={styles.courseState}>{this.getCourseState(rowData)}</Text>
                        <View style={styles.timeView}>
                            <Image source={require('./img/icon_clock_white.png')} style={styles.imgTime}/>
                            <Text style={styles.courseDuration}>{this.getCourseDuration(rowData)}</Text>
                        </View>
                    </View>
                </Image>
                <Text style={styles.title}>{rowData.title}</Text>
                <Text style={styles.teacher}>{this.getOrgName(rowData)}</Text>
            </TouchableOpacity>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <TopBar/>
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large"/>
                    <Text >加载中</Text>
                </View>
            </View>
        );
    }

    courseRefresh() {
        this.setState({isRefreshing: true});
        this.fetchCourse();
    }

    getOrgName(rowData) {
        if (rowData.teacher_name && rowData.college_name) {
            return rowData.college_name + ' ' + rowData.teacher_name;
        } else {
            if (rowData.teacher_name) {
                return rowData.teacher_name;
            }
            if (rowData.college_name) {
                return rowData.college_name;
            }
        }
    }

    getCourseState(rowData) {
        if (rowData.status == 0) {
            return '即将开始';
        } else if (rowData.status == 1) {
            return '正在开课';
        } else if (rowData.status == 2) {
            return '已经完结';
        }
    }

    getCourseDuration(rowData) {
        if (rowData.weeks >= 999) {
            return '' + '长期';
        } else {
            return rowData.weeks + ' 周';
        }
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
        this.fetchCourse();
    }

    fetchCourse() {
        fetch(courseUrl).then((response) => response.json()).then(
            responseData => {
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    courses: ds.cloneWithRows(responseData.data.datalist),
                    isRefreshing: false,
                });
            }
        ).done();
    }

}

const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        conentStyle: {
            flex: 1,
            justifyContent: 'flex-start',
        },
        gridStyle: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
        },
        listStyle: {
            flex: 1,
        },
        itemOpacity: {
            marginTop: 10,
            margin: 3,
            width: 170,
            height: 150,
        },
        loadingView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        imgBack: {
            width: window.width / 2 - 6,
            height: 100,
            alignItems: 'flex-end',
        },
        floatView: {
            backgroundColor: 'rgba(0,0,0,.5)',
            position: 'absolute',
            right: 0,
            bottom: 1.5,
            paddingLeft: 1.5,
            paddingRight: 1.5,
        },
        timeView: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        imgTime: {
            width: 10,
            height: 10,
        },
        courseState: {
            color: 'white',
            fontSize: 11,
        },
        courseDuration: {
            color: 'white',
            fontSize: 11,
            marginLeft: 2,
        },
        title: {
            marginTop: 5,
            fontSize: 12,
            color: '#181818',
        },
        teacher: {
            marginTop: 5,
            borderTopWidth: 0.5,
            fontSize: 10,
            color: '#b9b9b9',
        }
    })
    ;

module.exports = CourseList;