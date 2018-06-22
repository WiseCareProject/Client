import React from 'react';
import {TabNavigator} from "react-navigation";
import Temp from "../Main/Tabs/Temp";
import Feed from "../Main/Tabs/Feed";
import Drink from "../Main/Tabs/Drink";
import Camera from "../Main/Tabs/Camera";

const topNavigator = TabNavigator({
    Tab1: {
        screen: Temp,
        navigationOptions: {
            tabBarVisible: true,
            title: 'Temp'
        }
    },
    Tab2: {
        screen: Feed,
        navigationOptions: {
            tabBarVisible: true,
            title: 'Feed'
        }
    },
    Tab3: {
        screen: Drink,
        navigationOptions: {
            tabBarVisible: true,
            title: 'Drink'
        }
    },
    Tab4: {
        screen: Camera,
        navigationOptions: {
            tabBarVisible: true,
            title: 'Camera'
        }
    }
}, {
    lazy: false,
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'Tab2',
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        activeTintColor: 'rgba(255, 255, 255, 1.0)',
        inactiveTintColor: 'rgba(255, 255, 255, 0.3)',
        upperCaseLabel: false,
        style: {
            backgroundColor: 'rgba(255,255,255,0)',
            width: '100%',
            elevation: 0,
        },
        labelStyle: {
            fontSize: 18,
            marginTop: -5,
            fontFamily: "SourceSansPro-Regular",
        },
        indicatorStyle: {
            backgroundColor: 'rgba(255,255,255,0)',
        },
    },
    tabBarPosition: 'top',
});

export default topNavigator;