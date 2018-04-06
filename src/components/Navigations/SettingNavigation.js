import {TabNavigator} from "react-navigation";
import Temp from "../Settings/Tabs/Temp";
import Feed from "../Settings/Tabs/Feed";
import Drink from "../Settings/Tabs/Drink";

var SettingNavigator = TabNavigator({
    Tab1: {
        screen: Temp,
        navigationOptions: {
            tabBarVisible: false,
        }
    },
    Tab2: {
        screen: Feed,
        navigationOptions: {
            tabBarVisible: false,
        }
    },
    Tab3: {
        screen: Drink,
        navigationOptions: {
            tabBarVisible: false,
        }
    },
}, {
    swipeEnabled: true,
    animationEnabled: true,
    initialRouteName: 'Tab2'
});

export default SettingNavigator;