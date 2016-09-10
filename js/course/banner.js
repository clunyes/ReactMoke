/**
 * Created by Administrator on 2016/9/10.
 */
'use strict'
import React, {Component} from "react";
import {View, StyleSheet, ScrollView, Text, ViewPagerAndroid, Image} from "react-native";
import Swiper from 'react-native-swiper';

const bannerUrl = 'http://api.moocollege.com/mycloudedu/advert/info?code=homepage-mobile01';
const bannerImgUrl = 'http://api.moocollege.com/mycloudedu/picture/get_by_id?group=9&picture_id='

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageData: null,
        }
    }

    render() {
        if (!this.state.pageData) {
            return (<View></View>);
        } else {

            return (
                <View style={styles.banner}>
                    <Swiper style={styles.viewPager} showsButtons={false} horizontal={true} autoplay={true} dot={<View
                        style={{
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3,
                        }}/>}
                            activeDot={<View style={{
                                backgroundColor: '#000',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3,
                            }}/>}
                            paginationStyle={{
                                top: -280, left: null, right: 10,
                            }} loop={true}>
                        {this.getPageData()}
                    </Swiper>
                </View>
            );
        }
    }

    componentDidMount() {
        this.fetchBanner();
    }

    fetchBanner() {
        fetch(bannerUrl).then((response) => response.json()).then(
            responseData => {
                this.setState({
                    pageData: responseData.data.advertisements,
                });
            }
        ).done();
    }

    getPageData() {
        var pages = [];
        for (var i = 0; i < this.state.pageData.length; i++) {
            pages.push(
                <View key={i} style={styles.itemStyle} collapsable={false}>
                    <Image
                        style={styles.image}
                        source={{uri: bannerImgUrl + this.state.pageData[i].image_url}}
                    />
                </View>
            );
        }
        return pages;
    }
}

const styles = StyleSheet.create({
        banner: {
            height: 180,
        },
        image: {
            height: 180,
        },
        viewPager: {
            flex: 1,
        },
        itemStyle: {
            flex: 1,
        },
        dot: {
            backgroundColor: 'rgb(0,0,0)',
            width: 5,
            height: 5,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 20,
        }
    })
    ;
module.exports = Banner;