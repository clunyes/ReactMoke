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
    PixelRatio,
} from "react-native";
const courseUrl = 'http://api.moocollege.com/mycloudedu/course/union/share_courses?page_size=10&union_id=19';
const imgUrlPre = 'http://api.moocollege.com/mycloudedu/course/picture/get?width=340&course_id=';


var CourseDetail = require('./courseDetail/courseDetail.js');
var TopBar = require('../topview/topview.js');
var Banner = require('../course/banner.js');
var ChooseCourse = require('../course/coursechoose.js');

let page;
let onload;
let _scrollview;

var RCTUIManager = require('NativeModules').UIManager;

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null,
            isRefreshing: false,
        }
        page = 1;
        onload = false;
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
                    ref={(scrollview) => {
                        _scrollview = scrollview;
                    }}
                    showsVerticalScrollIndicator={false}
                    onScrollEndDrag={(event)=> {
                        {
                            this.onMove(event, _scrollview);
                        }
                    }}
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
        page = 1;
        this.setState({isRefreshing: true});
        this.fetchCourse();
    }

    onEnd() {
        if (!onload) {
            onload = true;
            page += 1;
            this.fetchCourse();
        }
    }

    onMove(event, scrollview) {
        let height = 0;
        let y = 0;
        //(x, y, width, height, pageX, pageY)
        RCTUIManager.measure(scrollview.getInnerViewNode(), (...data)=> {
            height = data[3];
            y = data[5];
            // alert('height***' + height);
            // alert('y***' + y);
            // alert(data);
            // alert('差值*******' + (y + height) / PixelRatio.get());
            if (Math.abs((y + height) / PixelRatio.get()) < 300) {//准确值为283.25，为哪块的值暂时不清楚
                this.onEnd();
            }
        });
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
        this.localCourses = [];
        this.fetchCourse();
    }

    fetchCourse() {
        fetch(courseUrl + '&current=' + page).then((response) => response.json()).then(
            responseData => {
                if (responseData && responseData.data && responseData.data.datalist) {
                    let myCourses = responseData.data.datalist;
                    if (page != 1) {
                        this.localCourses = this.localCourses.concat(myCourses);
                    } else {
                        this.localCourses = myCourses;
                    }
                    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                    this.setState({
                        courses: ds.cloneWithRows(this.localCourses),
                        isRefreshing: false,
                    });
                    onload = false;
                }
            }
        ).done();
    }

    getDataSource(courses) {

        return this.state.ds.cloneWithRows(localCourses);
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
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
        },
        listStyle: {
            flex: 1,
        },
        itemOpacity: {
            marginTop: 10,
            margin: 5,
            width: 170,
            height: 150,
        },
        loadingView: {
            flex: 1,
            alignItems: 'center',
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
    });

module.exports = CourseList;