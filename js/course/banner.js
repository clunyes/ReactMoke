/**
 * Created by Administrator on 2016/9/10.
 */
'use strict'
import React, {Component} from "react";
import {View, StyleSheet, ScrollView, Text, ViewPagerAndroid, Image} from "react-native";
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
                <View style={style.banner}>
                    <ViewPagerAndroid
                        style={style.viewPager}
                        initialPage={0}
                        ref={viewPager => {
                            this.viewPage = viewPager;
                        }}>
                        {this.getPageData()}
                    </ViewPagerAndroid>
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
                <View key={i} style={style.itemStyle} collapsable={false}>
                    <Image
                        style={style.image}
                        source={{uri: bannerImgUrl + this.state.pageData[i].image_url}}
                    />
                </View>
            );
        }
        return pages;
    }
}

const style = StyleSheet.create({
        banner: {
            height: 180,
        },
        image: {
            flex: 1,
        },
        viewPager: {
            flex: 1,
        },
        itemStyle: {
            flex: 1,
        },
    })
    ;
module.exports = Banner;